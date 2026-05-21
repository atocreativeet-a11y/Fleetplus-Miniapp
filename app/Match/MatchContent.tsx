'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function MatchContent() {
  const searchParams = useSearchParams();
  const [matches, setMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const homeLocation = searchParams.get('homeLocation');
    const officeLocation = searchParams.get('officeLocation');
    const arrivalTime = searchParams.get('arrivalTime');
    const departureTime = searchParams.get('departureTime');

    if (homeLocation && officeLocation && arrivalTime && departureTime) {
      fetch('/api/match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ homeLocation, officeLocation, arrivalTime, departureTime }),
      })
        .then((res) => res.json())
        .then((data) => {
          setMatches(data.matches || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [searchParams]);

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Your Commute Matches</h1>

      {loading ? (
        <p>Loading matches...</p>
      ) : matches.length === 0 ? (
        <p>No matches found yet.</p>
      ) : (
        <ul className="space-y-3">
          {matches.map((m, i) => (
            <li key={i} className="border p-3 rounded">
              <p><strong>Name:</strong> {m.name}</p>
              <p><strong>Phone:</strong> {m.phone}</p>
              <p><strong>Home:</strong> {m.home_location}</p>
              <p><strong>Office:</strong> {m.office_location}</p>
              <p><strong>Arrival:</strong> {m.arrival_time}</p>
              <p><strong>Departure:</strong> {m.departure_time}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
