import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Signup() {
  return (
    <PageWrapper>
      <Header />
      <div className="py-20 flex justify-center">
        <form className="w-full max-w-sm space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>
          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 dark:text-white"/>
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 dark:text-white"/>
          <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 dark:text-white"/>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700">
            Sign Up
          </button>
        </form>
      </div>
      <Footer />
    </PageWrapper>
  );
}
