import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ManageBooking from "../components/ManageBooking";

export default function Dashboard() {
  // TODO: fetch user bookings
  const bookings = [
    { id: "B001", service: "Flight", createdAt: "2025-07-10", status: "Confirmed", cancelable: true },
    { id: "H002", service: "Hotel", createdAt: "2025-06-01", status: "Cancelled", cancelable: false },
  ];

  return (
    <PageWrapper>
      <Header />
      <main className="py-12 space-y-6">
        <h2 className="text-2xl font-bold">My Bookings</h2>
        {bookings.length ? (
          bookings.map((b) => (
            <ManageBooking key={b.id} booking={b} onCancel={(id) => alert(`Cancel ${id}`)} />
          ))
        ) : (
          <p className="text-center text-gray-500">You have no bookings yet.</p>
        )}
      </main>
      <Footer />
    </PageWrapper>
  );
}
