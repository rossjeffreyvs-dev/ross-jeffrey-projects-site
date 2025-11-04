import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, company, email, message } = req.body;

  try {
    await sendgrid.send({
      to: "youremail@yourdomain.com", // 👈 your receiving email address
      from: "noreply@yourdomain.com", // 👈 must be verified in SendGrid
      subject: `New contact from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("SendGrid error:", error);
    res.status(500).json({ message: "Email failed to send" });
  }
}
