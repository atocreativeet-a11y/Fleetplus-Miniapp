export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <img src="/logo.jpg" className="w-32 mb-6" />
      <h1 className="text-2xl font-bold mb-2">Fleetplus</h1>
      <p className="text-gray-600 text-center mb-6">
       Welcome! To Fleet+ Find Carpool Partners. Save Time. Save Money
      </p>
      <a
        href="/register"
        className="bg-green-600 text-white px-6 py-3 rounded-xl"
      >
        Get Started
      </a>
    </main>
  );
}