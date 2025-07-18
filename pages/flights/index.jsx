import Header from "../../components/Header";
import SearchBox from "../../components/SearchBox";
import Footer from "../../components/Footer";

export default function FlightsSearch() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Search Flights</h2>
        <SearchBox service="flights" />
      </main>
      <Footer />
    </div>
  );
}
