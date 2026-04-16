export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, email, and message are required",
      });
    }

    if (!process.env.GOOGLE_SCRIPT_URL) {
      return res.status(500).json({
        success: false,
        error: "Missing GOOGLE_SCRIPT_URL environment variable",
      });
    }

    const response = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const text = await response.text();

    let data = {};
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    if (!response.ok) {
      console.error("Google script request failed:", {
        status: response.status,
        body: data,
      });

      return res.status(500).json({
        success: false,
        error: data.error || "Google script request failed",
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      error: "Server error while sending message",
    });
  }
}
