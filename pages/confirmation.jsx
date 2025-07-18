import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Confirmation() {
  // TODO: fetch booking reference from query or context
  const bookingCode = "ABC123";

  return (
    <PageWrapper>
      <Header />
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Thank you for booking!</h2>
        <p className="text-gray-600">Your confirmation code is <strong>{bookingCode}</strong>.</p>
      </div>
      <Footer />
    </PageWrapper>
  );
}
