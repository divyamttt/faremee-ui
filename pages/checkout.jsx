import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Checkout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="py-12 px-4 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6">Checkout</h2>
        <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 dark:text-white"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 dark:text-white"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Confirm & Pay
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
