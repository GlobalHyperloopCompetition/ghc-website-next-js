import { NextRequest, NextResponse } from "next/server";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(FormData);

export async function POST(request: NextRequest) {
  let body = await request.json();

  const googleFormUrl =
    "https://docs.google.com/forms/u/4/d/e/1FAIpQLSdA2w18RBe2lW7Xyxq1cdo8sk-oE_jlmR8YGlbKlyNtdqK_Iw/formResponse";

  const googleFormData = new URLSearchParams();
  googleFormData.append("entry.1272740819", body.name);
  googleFormData.append("entry.1671601578", body.email);
  googleFormData.append("entry.1973693697", body.message);

  // Initialize Mailgun client
  const mg = mailgun.client({
    username: process.env.MAILGUN_USERNAME!, // Get Mailgun username from env
    key: process.env.MAILGUN_API_KEY!, // Get Mailgun API key from env
    url: "https://api.eu.mailgun.net", // Use the Mailgun EU endpoint
  });

  // Mailgun email data
  const emailData = {
    from: "admin@ghciitm.com", // Use your Mailgun verified domain
    to: "ghc@smail.iitm.ac.in",
    subject: "New Contact Form Submission",
    text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
  };

  try {
    if (body.email !== "" && body.name !== "" && body.message !== "") {
      const googleFormResponse = await fetch(googleFormUrl, {
        method: "POST",
        body: googleFormData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      console.log(googleFormResponse);

      const result = await mg.messages.create(
        process.env.MAILGUN_DOMAIN!,
        emailData
      );

      return NextResponse.json({ success: true, message: "Message sent" });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong!",
    });
  }
}
