import { useRouter } from "next/router";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function BookingDetail() {
  const { id } = useRouter().query;
  // Replace with real fetch once backend is wired
  const booking = null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Booking Detail</h2>
        {!booking ? (
          <p className="text-center text-gray-500">Loading…</p>
        ) : (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            {/* render booking details here */}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
