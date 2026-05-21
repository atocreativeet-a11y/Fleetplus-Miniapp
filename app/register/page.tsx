'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    workAt: '',
    homeLocation: '',
    officeLocation: '',
    arrivalTime: '',
    departureTime: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const missing: string[] = [];

    if (!form.name) missing.push('Full Name');
    if (!form.phone || form.phone.length !== 9) missing.push('Phone Number (9 digits after +251)');
    if (!form.workAt) missing.push('Work At');
    if (!form.homeLocation) missing.push('Home Location');
    if (!form.officeLocation) missing.push('Office Location');
    if (!form.arrivalTime) missing.push('Arrival Time');
    if (!form.departureTime) missing.push('Departure Time');

    if (missing.length > 0) {
      alert(`Please fill in the following fields:\n- ${missing.join('\n- ')}`);
      return;
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, phone: `+251${form.phone}` }), // store full phone
      });

      const result = await res.json();

      if (res.ok) {
        router.push(`/match?status=${result.status}`);
      } else {
        alert(result.message || 'Error saving data');
      }
    } catch (err) {
      console.error(err);
      alert('Network error');
    }
  };

  return (
    <main className="min-h-screen flex flex-col justify-between p-6 bg-gray-50">
      <div className="overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">REGISTER COMMUTE</h1>

        {/* Personal Info */}
        <section className="mb-6">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            required
            onChange={handleChange}
            className="border p-3 w-full mb-3 rounded"
          />

          <div className="mb-3">
            <label className="block mb-2 font-medium">Phone Number</label>
            <div className="flex items-center border rounded p-3">
              <span className="mr-2">🇪🇹 +251</span>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => {
                  const digits = e.target.value.replace(/\D/g, '').slice(0, 9);
                  setForm({ ...form, phone: digits });
                }}
                className="flex-1 outline-none"
                required
              />
            </div>
          </div>

          <label className="block mb-2 font-medium">I Work At</label>
          <select
            name="workAt"
            value={form.workAt}
            required
            onChange={handleChange}
            className="border p-3 w-full mb-3 rounded"
          >
            <option value="">Select...</option>
            <option value="Abay Bank">Abay Bank</option>
            <option value="Addis Bank">Addis Bank</option>
            <option value="Ahadu Bank">Ahadu Bank</option>
            <option value="Amhara Bank">Amhara Bank</option>
            <option value="Anbesa Bank">Anbesa Bank</option>
            <option value="Awash Bank">Awash Bank</option>
            <option value="Bank of Abyssinia">Bank of Abyssinia</option>
            <option value="Berhan Bank">Berhan Bank</option>
            <option value="Bunna Bank">Bunna Bank</option>
            <option value="Commercial Bank of Ethiopia">Commercial Bank of Ethiopia</option>
            <option value="Cooperative Bank of Oromia">Cooperative Bank of Oromia</option>
            <option value="Dashen Bank">Dashen Bank</option>
            <option value="Enat Bank">Enat Bank</option>
            <option value="Global Bank Ethiopia">Global Bank Ethiopia</option>
            <option value="Gadaa Bank">Gadaa Bank</option>
            <option value="Hibret Bank">Hibret Bank</option>
            <option value="Hijra Bank">Hijra Bank</option>
            <option value="Oromia Bank">Oromia Bank</option>
            <option value="Nib International Bank">Nib International Bank</option>
            <option value="Siinqee Bank">Siinqee Bank</option>
            <option value="Shabelle Bank">Shabelle Bank</option>
            <option value="Tsehay Bank">Tsehay Bank</option>
            <option value="Tsedey Bank">Tsedey Bank</option>
            <option value="ZamZam Bank">ZamZam Bank</option>
            <option value="Wegagen Bank">Wegagen Bank</option>
            <option value="Zemen Bank">Zemen Bank</option>
          </select>
        </section>

        {/* Locations */}
        <section className="mb-6">
          <label className="block mb-2 font-medium">My House Is Located at</label>
          <select
            name="homeLocation"
            value={form.homeLocation}
            required
            onChange={handleChange}
            className="border p-3 w-full mb-3 rounded"
          >
            <option value="">Select...</option>
            <option value="Piassa">Piassa</option>
            <option value="Merkato">Merkato</option>
            <option value="Mexico">Mexico</option>
            <option value="Kazanchis">Kazanchis</option>
            <option value="Bole">Bole</option>
            <option value="Megenagna">Megenagna</option>
            <option value="CMC">CMC</option>
            <option value="Gerji">Gerji</option>
            <option value="Jemo">Jemo</option>
            <option value="Garment">Garment</option>
            <option value="Bethel">Bethel</option>
            <option value="Ayer Tena">Ayer Tena</option>
            <option value="Goro">Goro</option>
            <option value="Shiromeda">Shiromeda</option>
            <option value="Kera">Kera</option>
          </select>

          <label className="block mb-2 font-medium">My Office Is Located at</label>
          <select
            name="officeLocation"
            value={form.officeLocation}
            required
            onChange={handleChange}
            className="border p-3 w-full mb-3 rounded"
          >
            <option value="">Select...</option>
            <option value="Piassa">Piassa</option>
            <option value="Merkato">Merkato</option>
            <option value="Mexico">Mexico</option>
            <option value="Kazanchis">Kazanchis</option>
            <option value="Bole">Bole</option>
            <option value="Megenagna">Megenagna</option>
            <option value="CMC">CMC</option>
            <option value="Gerji">Gerji</option>
            <option value="Jemo">Jemo</option>
            <option value="Garment">Garment</option>
            <option value="Bethel">Bethel</option>
            <option value="Ayer Tena">Ayer Tena</option>
            <option value="Goro">Goro</option>
            <option value="Shiromeda">Shiromeda</option>
            <option value="Kera">Kera</option>
          </select>
        </section>

        {/* Times */}
        <section className="mb-6">
          <label className="block mb-2 font-medium">I Arrive Office at</label>
          <input
            name="arrivalTime"
            type="time"
            value={form.arrivalTime}
            required
            onChange={handleChange}
            className="border p-3 w-full mb-3 rounded"
          />

          <label className="block mb-2 font-medium">I Leave Office at</label>
          <input
            name="departureTime"
            type="time"
            value={form.departureTime}
            required
            onChange={handleChange}
            className="border p-3 w-full mb-3 rounded"
          />
        </section>
      </div>

      {/* Submit Button pinned at bottom */}
      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white w-full py-3 rounded-xl font-semibold mt-6"
      >
        Submit
      </button>
    </main>
  );
}
``