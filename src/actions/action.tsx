"use server";

import { transporter } from "@/lib/nodemailer";

const submit = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    await transporter.sendMail({
      from: process.env.SMTP_MAIL,
      to: process.env.RECIEVER,
      subject: `Message from ${name}`,
      text: "Portfolio",
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });
  } catch (error) {
    return new Error("Something went wrong");
  }
};

export default submit;
