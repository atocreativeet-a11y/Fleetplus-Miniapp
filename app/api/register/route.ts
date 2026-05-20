import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, homeLocation, officeLocation, arrivalTime, departureTime } = body;

    const { data, error } = await supabase
      .from('commutes')
      .insert([
        {
          name,
          phone,
          home_location: homeLocation,
          office_location: officeLocation,
          arrival_time: arrivalTime,
          departure_time: departureTime,
        },
      ]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}