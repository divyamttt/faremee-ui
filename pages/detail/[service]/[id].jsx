import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import PageWrapper from "../../../components/PageWrapper";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ImageCarousel from "../../../components/ImageCarousel";
import PriceBreakdown from "../../../components/PriceBreakdown";
import AddOnsPanel from "../../../components/AddOnsPanel";
import SeatMap from "../../../components/SeatMap";

export default function DetailPage() {
  const { service, id } = useRouter().query;
  const [basePrice, setBasePrice] = useState(200);
  const [addOns, setAddOns] = useState({});

  useEffect(() => {
    // TODO: fetch detail by service & id
    console.log("Detail fetch", service, id);
  }, [service, id]);

  return (
    <PageWrapper>
      <Header />
      <main className="py-8 space-y-6">
        <ImageCarousel images={["/deals/1.jpg", "/deals/2.jpg", "/deals/1.jpg"]} />
        <PriceBreakdown price={basePrice} />
        <SeatMap />
        <AddOnsPanel onChange={setAddOns} />
        <div className="bg-blue-600 text-white p-4 rounded-lg text-center">
          Total (incl. add-ons): $
          {(
            basePrice +
            (addOns.insurance ? 29.99 : 0) +
            (addOns.extraBaggage ? 49.99 : 0) +
            (addOns.refundable ? 79.99 : 0)
          ).toFixed(2)}
        </div>
      </main>
      <Footer />
    </PageWrapper>
  );
}
