import crypto from "crypto";

export default function handler(req, res) {
  const { initData } = req.query;
  const secret = process.env.TELEGRAM_BOT_TOKEN;

  // Verify Telegram initData
  const checkString = Object.keys(initData)
    .sort()
    .map(key => `${key}=${initData[key]}`)
    .join("\n");

  const hash = crypto.createHmac("sha256", secret).update(checkString).digest("hex");

  if (hash !== initData.hash) {
    return res.status(403).json({ error: "Invalid Telegram data" });
  }

  res.status(200).json({ message: "User verified", user: initData });
}
