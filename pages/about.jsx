import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <PageWrapper>
      <Header />
      <main className="py-12 prose dark:prose-invert max-w-3xl mx-auto">
        <h1>About Us</h1>
        <p>
          Faremee is a modern travel platform offering flights, hotels, car rentals, and vacation packages. Our mission is to make travel booking fast, simple, and reliable.
        </p>
        <p>
          Founded in 2025, we leverage state-of-the-art APIs and real-time data to bring you the best fares and deals across the globe.
        </p>
      </main>
      <Footer />
    </PageWrapper>
  );
}
