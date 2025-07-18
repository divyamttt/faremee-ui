import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Dashboard() {
  // Replace with real fetch once backend is wired
  const bookings = [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
        <div className="space-y-4">
          {bookings.length ? (
            bookings.map((b) => (
              <div
                key={b.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
              >
                <p className="font-medium">{b.service} Booking</p>
                <p className="text-sm text-gray-500">{b.createdAt}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              You have no bookings yet.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
