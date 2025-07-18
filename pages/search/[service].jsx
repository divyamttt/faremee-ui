import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SortControl from "../../components/SortControl";
import FilterSidebar from "../../components/FilterSidebar";
import FlightCard from "../../components/FlightCard";
import HotelCard from "../../components/HotelCard";
import CarCard from "../../components/CarCard";
import PackageCard from "../../components/PackageCard";
import MapToggle from "../../components/MapToggle";
import Pagination from "../../components/Pagination";

export default function SearchResults() {
  const { service, ...q } = useRouter().query;
  const [filters, setFilters] = useState({
    priceMin: 0,
    priceMax: 1000,
    stops: [],
    airlines: [],
    stars: [],
    propertyTypes: [],
    vehicleClasses: [],
    suppliers: [],
    flexibleDates: false,
    activities: [],
  });
  const dynamicLists = {
    airlinesList: ["AA", "DL", "UA", "SW"],
    suppliersList: ["Hertz", "Avis", "Enterprise"],
  };
  const [sort, setSort] = useState("best");
  const [showMap, setShowMap] = useState(false);
  const [page, setPage] = useState(1);
  const totalPages = 5;

  useEffect(() => {
    // TODO: fetch data based on service, q, filters, sort, page
    console.log("Fetch", service, q, filters, sort, page);
  }, [service, q, filters, sort, page]);

  // Dummy items
  const items = Array.from({ length: 6 }, (_, i) => ({ id: i + 1 }));

  const renderCard = (item) => {
    if (service === "flights") return <FlightCard key={item.id} flight={item} />;
    if (service === "hotels") return <HotelCard key={item.id} hotel={item} />;
    if (service === "car-rentals") return <CarCard key={item.id} car={item} />;
    if (service === "vacation-packages") return <PackageCard key={item.id} pkg={item} />;
    return null;
  };

  return (
    <PageWrapper>
      <Header />
      <div className="flex flex-col lg:flex-row py-8">
        <FilterSidebar
          service={service}
          filters={{ ...filters, ...dynamicLists }}
          onFiltersChange={setFilters}
        />
        <div className="flex-1 lg:pl-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6 space-y-4 md:space-y-0">
            <h2 className="text-2xl font-bold capitalize">{service} Results</h2>
            <div className="flex space-x-4">
              <SortControl value={sort} onChange={setSort} />
              <MapToggle showingMap={showMap} onToggle={() => setShowMap((m) => !m)} />
            </div>
          </div>
          {showMap ? (
            <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded mb-6">Map Placeholder</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map(renderCard)}
            </div>
          )}
          <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
      </div>
      <Footer />
    </PageWrapper>
  );
}
