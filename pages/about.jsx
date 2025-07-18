import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="py-12 px-4 max-w-3xl mx-auto prose dark:prose-invert">
        <h1>About Us</h1>
        <p>Faremee is a modern travel booking platform designed to help you find the best fares, hotels, cars, and vacation packages all in one place.</p>
      </main>
      <Footer />
    </div>
  );
}
