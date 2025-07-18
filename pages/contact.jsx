import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="py-12 px-4 max-w-3xl mx-auto prose dark:prose-invert">
        <h1>Contact Us</h1>
        <p>
          Have questions or need assistance? Reach out to our support team at{" "}
          <a href="mailto:support@faremee.com" className="text-blue-600">
            support@faremee.com
          </a>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
}
