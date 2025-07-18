import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import DealsCarousel from "../components/DealsCarousel";
import SearchBox from "../components/SearchBox";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <PageWrapper>
      <Header />
      <main className="py-12 space-y-12">
        <DealsCarousel />
        <SearchBox service="flights" />
      </main>
      <Footer />
    </PageWrapper>
  );
}
