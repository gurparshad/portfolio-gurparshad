
// @ts-nocheck
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const receiverEmail = process.env.TO_EMAIL;

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "panksharma230@gmail.com",
      to: "gurparshadsharma97@gmail.com",
      subject: "Hello world",
      react: (
        `<div>
        <p>Email Body</p>
      </div>`
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}