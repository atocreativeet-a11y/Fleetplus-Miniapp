'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Match() {
  const params = useSearchParams();
  const status = params.get('status');
  const [matches, setMatches] = useState<any[]>([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const res = await fetch('/api/matches'); // optional endpoint to fetch matches
      if (res.ok) {
        const data = await res.json();
        setMatches(data.matches || []);
      }
    };
    if (status === 'match') fetchMatches();
  }, [status]);

  const handleConnect = async (person: any) => {
    const res = await fetch('/api/connect', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ telegramHandle: person.telegramHandle, name: person.name }),
    });

    const result = await res.json();
    alert(result.message);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      {status === 'match' ? (
        <div className="w-full max-w-md space-y-6 animate-fadeIn">
          <h1 className="text-3xl font-bold text-green-600 text-center">🎉 Matches Found!</h1>
          <p className="text-center text-gray-600">
            We found {matches.length} people on your route and time.
          </p>

          <ul className="space-y-4">
            {matches.map((person) => (
              <li
                key={person.id}
                className="flex justify-between items-center bg-white p-4 rounded-lg border"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={person.profilePic || '/default-avatar.png'}
                    alt={person.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <p className="font-semibold">{person.name}</p>
                </div>
                <button
                  onClick={() => handleConnect(person)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                  Connect
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-center space-y-6 animate-fadeIn">
          <img src="/logo.jpg" alt="Fleetplus Logo" className="mx-auto w-32 h-auto" />
          <h1 className="text-3xl font-bold text-gray-800">No Match Yet</h1>
          <p className="text-gray-600 text-lg">We’ll get back to you once a partner is available.</p>
          <p className="text-gray-400">Thanks for your patience!</p>
        </div>
      )}
    </main>
  );
}
