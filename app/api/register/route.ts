// app/api/register/route.ts
import { NextResponse } from 'next/server';

// Fake in-memory database
let commuters: any[] = [];

export async function POST(req: Request) {
  const body = await req.json();
  const { name, phone, homeLocation, officeLocation, arrivalTime, departureTime } = body;

  const newEntry = {
    id: Date.now(),
    name,
    phone,
    homeLocation,
    officeLocation,
    arrivalTime,
    departureTime,
  };
  commuters.push(newEntry);

  // Try to find a match
  const match = commuters.find(
    (c) =>
      c.id !== newEntry.id &&
      c.homeLocation === homeLocation &&
      c.officeLocation === officeLocation &&
      c.arrivalTime === arrivalTime &&
      c.departureTime === departureTime
  );

  if (match) {
    return NextResponse.json({
      status: 'match',
      matchId: match.id,
      message: 'Match found!',
      match,
    });
  } else {
    return NextResponse.json({
      status: 'wait',
      message: 'No match yet. Please wait.',
    });
  }
}
