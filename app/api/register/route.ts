import { NextResponse } from 'next/server';

let commuters: any[] = [];

export async function POST(req: Request) {
  const body = await req.json();
  const { name, homeLocation, officeLocation, arrivalTime, departureTime, telegramHandle, profilePic } = body;

  const newEntry = {
    id: Date.now(),
    name,
    telegramHandle,   // store Telegram username instead of phone
    profilePic,       // store profile picture URL
    homeLocation,
    officeLocation,
    arrivalTime,
    departureTime,
  };
  commuters.push(newEntry);

  // Find all matches
  const matches = commuters.filter(
    (c) =>
      c.id !== newEntry.id &&
      c.homeLocation === homeLocation &&
      c.officeLocation === officeLocation &&
      c.arrivalTime === arrivalTime &&
      c.departureTime === departureTime
  );

  if (matches.length > 0) {
    return NextResponse.json({
      status: 'match',
      matches,
      message: `${matches.length} people found on your route!`,
    });
  } else {
    return NextResponse.json({
      status: 'wait',
      message: 'No match yet. Please wait.',
    });
  }
}