import { connectDB } from "@/dbConfig/dbConfig";
import Customer from "@/Models/customerModels";
import { DevBundlerService } from "next/dist/server/lib/dev-bundler-service";
import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// await connectDB();
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = await params;
    console.log(id);

    // await Customer.findOneAndDelete(id);

    // const transporter = nodemailer.createTransport({
    //   host: "smtp.gmail.com",
    //   port: 587,
    //   secure: false,
    //   auth: {
    //     user: process.env.NEXT_EMAIL,
    //     pass: process.env.NEXT_EMAIL_PASS,
    //   },
    //   tls: {
    //     rejectUnauthorized: false,
    //   },
    // });

    // const companyMailOptions = {
    //   from: process.env.NEXT_EMAIL,
    //   to: process.env.NEXT_RECEIVER_EMAIL,
    //   subject: `New Reservation for PICO - Booking ID: ${bookingId}`,
    //   text: `
    //   Dear Reservation Manager,

    //   A new table reservation has been submitted for PICO with the following details:

    //   Booking ID: ${bookingId}
    //   Customer Name: ${name}
    //   Customer Email: ${email}
    //   Customer Phone: ${phone}
    //   Reservation Date & Time (IST): ${istDateTime}
    //   Number of Guests: ${seats}

    //   Please check your reservation system and prepare for their arrival.

    //   Regards,
    //   Your Automated Reservation System
    // `,
    // };

    // const restaurantName = "PICO";
    // const userMailOptions = {
    //   from: process.env.NEXT_EMAIL,
    //   to: email, // IMPORTANT: Send to the customer's email address
    //   subject: `Your table reservation at ${restaurantName} is confirmed!`,
    //   text: `
    //   Hey "${name}",

    //   Your table reservation at "${restaurantName}" is confirmed with the following details:

    //   Booking ID: ${bookingId}
    //   Date & Time: ${istDateTime}
    //   No of Persons: ${seats}
    //   Booking ID: bookingID
    //   Address: Kolkata, Kolkata

    //   In our endeavor to ensure you have a wonderful experience with us, we request you to keep in mind that your table will be held 15 minutes from the time of reservation, post which it stands released.

    //   For any queries or further assistance, kindly connect with the restaurant on “+918240912328”

    //   Reservation Manager by ${restaurantName}.
    // `,
    // };

    // await transporter.sendMail(companyMailOptions);
    // await transporter.sendMail(userMailOptions);
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
