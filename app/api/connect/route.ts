import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { telegramHandle, name } = await req.json();

  try {
    // Send message via Telegram Bot API
    const res = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: `@${telegramHandle}`, // Telegram username
          text: `${name} needs to connect with you for carpooling.`,
        }),
      }
    );

    if (!res.ok) {
      throw new Error('Telegram API error');
    }

    return NextResponse.json({ message: 'Telegram DM sent!' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Failed to send Telegram DM' }, { status: 500 });
  }
}
