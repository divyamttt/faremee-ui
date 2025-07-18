import PageWrapper from "../../../components/PageWrapper";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ManageBooking from "../../../components/ManageBooking";
import { useRouter } from "next/router";

export default function BookingDetail() {
  const { id } = useRouter().query;
  // TODO: fetch booking by id
  const booking = { id, status: "Confirmed", cancelable: true };

  return (
    <PageWrapper>
      <Header />
      <main className="py-12">
        <h2 className="text-2xl font-bold mb-4">Booking Detail</h2>
        <ManageBooking booking={booking} onCancel={(id) => alert(`Cancel ${id}`)} />
      </main>
      <Footer />
    </PageWrapper>
  );
}
