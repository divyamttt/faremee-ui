import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 dark:text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
      <Footer />
    </div>
  );
}
