'use client';
import { useState } from 'react';

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    workArea: '',
    startTime: '',
    endTime: ''
  });

  const handleChange = (e:any) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async () => {
    console.log(form);
    alert('Saved (connect backend next)');
  };

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-xl font-bold mb-4">Register Commute</h1>

      <input name="name" placeholder="Full Name" onChange={handleChange}
        className="border p-3 w-full mb-3 rounded"/>

      <input name="phone" placeholder="Phone" onChange={handleChange}
        className="border p-3 w-full mb-3 rounded"/>

      <input name="workArea" placeholder="Work Area" onChange={handleChange}
        className="border p-3 w-full mb-3 rounded"/>

      <input name="startTime" placeholder="Start Time" onChange={handleChange}
        className="border p-3 w-full mb-3 rounded"/>

      <input name="endTime" placeholder="End Time" onChange={handleChange}
        className="border p-3 w-full mb-3 rounded"/>

      <button onClick={handleSubmit}
        className="bg-green-600 text-white w-full py-3 rounded-xl">
        Save
      </button>
    </main>
  );
}