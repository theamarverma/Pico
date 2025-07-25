import { connectDB } from "@/dbConfig/dbConfig";
import Customer from "@/Models/customerModels";
import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const { name, email, phone, datetime, seats } = body;

    if (!email || !name || !phone || !datetime || !seats) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 404 },
      );
    }
    // Convert the datetime to IST
    const reservationDateTime = new Date(datetime);
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const istDateTime = new Intl.DateTimeFormat("en-IN", options).format(
      reservationDateTime,
    );

    // generate booking ID
    const generateReadableBookingId = async (length = 8): Promise<string> => {
      const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
      let result = "";
      let isUnique = false;
      let attempts = 0;
      const MAX_ATTEMPTS = 5;

      while (!isUnique && attempts < MAX_ATTEMPTS) {
        result = "";
        for (let i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * characters.length),
          );
        }
        // Check if this bookingId already exists in the database
        const existingCustomer = await Customer.findOne({ bookingId: result });
        if (!existingCustomer) {
          isUnique = true;
        }
        attempts++;
      }

      if (!isUnique) {
        throw new Error("Could not generate a unique booking ID.");
      }
      return result;
    };

    const bookingId = await generateReadableBookingId();

    const savedCustomer = await new Customer({
      bookingId,
      name,
      email,
      phone,
      dateTime: reservationDateTime,
      seats,
      istDateTime,
    }).save();

    if (!savedCustomer) {
      return NextResponse.json({ error: "Failed to save customer" });
    }

    console.log("Saved customer:", savedCustomer);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NEXT_EMAIL,
        pass: process.env.NEXT_EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const companyMailOptions = {
      from: process.env.NEXT_EMAIL,
      to: process.env.NEXT_RECEIVER_EMAIL,
      subject: `New Reservation for PICO - Booking ID: ${bookingId}`,
      text: `
      Dear Reservation Manager,

      A new table reservation has been submitted for PICO with the following details:

      Booking ID: ${bookingId}
      Customer Name: ${name}
      Customer Email: ${email}
      Customer Phone: ${phone}
      Reservation Date & Time (IST): ${istDateTime}
      Number of Guests: ${seats}

      Please check your reservation system and prepare for their arrival.

      Regards,
      Your Automated Reservation System
    `,
    };

    const restaurantName = "PICO";
    const userMailOptions = {
      from: process.env.NEXT_EMAIL,
      to: email, // IMPORTANT: Send to the customer's email address
      subject: `Your table reservation at ${restaurantName} is confirmed!`,
      text: `
      Hey "${name}",

      Your table reservation at "${restaurantName}" is confirmed with the following details:
      
      Booking ID: ${bookingId}
      Date & Time: ${istDateTime}
      No of Persons: ${seats}
      Booking ID: bookingID
      Address: Kolkata, Kolkata

      Please remember, your table will be held for 15 minutes from your reservation time, after which it will be released.

      For any queries or further assistance, kindly connect with the restaurant on “+918240912328”

      Reservation Manager by ${restaurantName}.
    `,
    };

    await Promise.allSettled([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(userMailOptions),
    ]).then((results) => {
      results.forEach((result, index) => {
        if (result.status === "rejected") {
          console.error(
            `Error sending email ${index === 0 ? "to company" : "to user"}:`,
            result.reason,
          );
        }
      });
    });

    // 5. **Return Success Response**
    return NextResponse.json({
      success: true,
      message: "Reservation confirmed and emails sent successfully!",
      bookingId: savedCustomer.bookingId,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
