import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function toMinutes(time: string) {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

function within30Minutes(t1: string, t2: string) {
  return Math.abs(toMinutes(t1) - toMinutes(t2)) <= 30;
}

export async function POST(req: Request) {
  const body = await req.json();
  const { homeLocation, officeLocation, arrivalTime, departureTime } = body;

  const { data, error } = await supabase
    .from('commutes')
    .select('*')
    .eq('home_location', homeLocation)
    .eq('office_location', officeLocation);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  const matches = data.filter(
    (c) =>
      within30Minutes(c.arrival_time, arrivalTime) &&
      within30Minutes(c.departure_time, departureTime)
  );

  return NextResponse.json({ matches }, { status: 200 });
}
