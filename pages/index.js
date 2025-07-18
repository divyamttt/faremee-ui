import Header from "../components/Header";
import DealsCarousel from "../components/DealsCarousel";
import SearchBox from "../components/SearchBox";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="py-12 px-4 max-w-5xl mx-auto">
        <DealsCarousel />
        <SearchBox />
      </main>
      <Footer />
    </div>
  );
}
