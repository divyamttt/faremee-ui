import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Confirmation() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center">
      <Header />
      <div className="text-center p-6">
        <h2 className="text-3xl font-bold mb-4">Thank you for booking!</h2>
        <p className="text-gray-600">
          Your confirmation code is <strong>#ABC123</strong>.
        </p>
      </div>
      <Footer />
    </div>
  );
}
