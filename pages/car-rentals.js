import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import Footer from "../components/Footer";

export default function CarRentalsSearch() {
  return (
    <PageWrapper>
      <Header />
      <main className="py-12">
        <h2 className="text-2xl font-bold mb-4">Search Car Rentals</h2>
        <SearchBox service="car-rentals" />
      </main>
      <Footer />
    </PageWrapper>
  );
}
