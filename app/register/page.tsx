'use client';
import { useState } from 'react';

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    homeLocation: '',
    officeLocation: '',
    arrivalTime: '',
    departureTime: ''
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log(form);
    alert('Saved (connect backend next)');
  };

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Register Commute</h1>

      {/* Personal Info */}
      <section className="mb-6">
      <input
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
          className="border p-3 w-full mb-3 rounded"
        />
        <input
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
          className="border p-3 w-full mb-3 rounded"
        />
      </section>

      {/* Locations */}
      <section className="mb-6">
       <label className="block mb-2 font-medium">My House Is Located at</label>
        <select
          name="homeLocation"
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
          required
          onChange={handleChange}
          className="border p-3 w-full mb-3 rounded"
        />

        <label className="block mb-2 font-medium">I Leave Office at</label>
        <input
          name="departureTime"
          type="time"
          required
          onChange={handleChange}
          className="border p-3 w-full mb-3 rounded"
        />
      </section>

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white w-full py-3 rounded-xl font-semibold"
      >
        Save
      </button>
    </main>
  );
}