import { connectDB } from "@/dbConfig/dbConfig";
import Customer from "@/Models/customerModels";

import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { bookingId: string; email: string } },
) {
  try {
    await connectDB();
    const id = await params;
    const bookingId = id.bookingId;
    const email = id.email;
    console.log(bookingId, email);

    const foundCustomer = await Customer.findOne({
      bookingId: bookingId,
      email: email,
    }).catch((error) => {
      console.log(error);
    });

    if (!foundCustomer) {
      // If email and booking ID did not match a record, return an error.
      return NextResponse.json(
        {
          success: false,
          message:
            "No reservation found matching the provided Booking ID and Email.",
        },
        { status: 404 },
      );
    }

    console.log(foundCustomer);

    const { name, phone, dateTime, seats } = foundCustomer;

    // Convert the datetime to IST
    const reservationDateTime = new Date(dateTime);
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

    const restaurantName = "PICO";
    const restaurantAddress = "559, Lake Rd, Southern Avenue , 700029, Kolkata";

    // --- User Cancellation Email Options ---
    const userCancellationMailOptions = {
      from: process.env.NEXT_EMAIL,
      to: email,
      subject: `Your ${restaurantName} Reservation - CANCELLED`,
      html: `
        <p>Hey "<strong>${name}</strong>",</p>
        <p>Your table booking on "<strong>${istDateTime}</strong>",
        for "<strong>${seats}</strong>" of people at "<strong>${restaurantName}</strong>", "<strong>${restaurantAddress}</strong>" has been <strong>CANCELLED</strong>.</p>
        <p>Booking Id : "<strong>${bookingId}</strong>"</p>
        <p>Reservation Manager by ${restaurantName}</p>
        <br>
        <p>If you have any questions or believe this is an error, please contact us.</p>
      `,
    };

    const companyCancellationNotificationOptions = {
      from: process.env.NEXT_EMAIL,
      to: process.env.NEXT_RECEIVER_EMAIL,
      subject: `Reservation CANCELLED for ${restaurantName} - Booking ID: ${bookingId}`,
      html: `
        <p>Dear Reservation Manager,</p>
        <p>A table reservation has been CANCELLED with the following details:</p>
        <ul>
          <li><strong>Booking ID:</strong> ${bookingId}</li>
          <li><strong>Customer Name:</strong> ${name}</li>
          <li><strong>Customer Email:</strong> ${email}</li>
          <li><strong>Customer Phone:</strong> ${phone}</li>
          <li><strong>Original Reservation Date & Time (IST):</strong> ${istDateTime}</li>
          <li><strong>Number of Guests:</strong> ${seats}</li>
        </ul>
        <p>Please update your reservation system accordingly.</p>
        <p>Regards,<br>Your Automated Reservation System</p>
      `,
    };

    await transporter.sendMail(userCancellationMailOptions);
    await transporter.sendMail(companyCancellationNotificationOptions);

    // Delete Operation
    const deletedCustomer = await Customer.findOneAndDelete({
      bookingId: bookingId,
      email: email,
    }).catch((error) => {
      console.log(error);
    });

    if (!bookingId || !email) {
      return NextResponse.json({ error: "Missing required fields" });
    }

    if (!deletedCustomer) {
      // If email and booking ID did not match a record, return an error.
      return NextResponse.json(
        {
          success: false,
          message:
            "No reservation found matching the provided Booking ID and Email.",
        },
        { status: 404 },
      );
    }

    if (deletedCustomer) {
      // If email and booking ID matched a record, return a success message.
      return NextResponse.json({
        success: true,
        message: "Reservation cancelled successfully.",
      });
    }

    return NextResponse.json({
      message: "Email sent successfully!",
      success: true,
      // data: savedCustomer,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
