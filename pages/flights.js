import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import Footer from "../components/Footer";

export default function FlightsSearch() {
  return (
    <PageWrapper>
      <Header />
      <main className="py-12">
        <h2 className="text-2xl font-bold mb-4">Search Flights</h2>
        <SearchBox service="flights" />
      </main>
      <Footer />
    </PageWrapper>
  );
}
