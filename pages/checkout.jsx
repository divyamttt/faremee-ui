import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckoutSummary from "../components/CheckoutSummary";

export default function Checkout() {
  // TODO: pull basePrice, addOns, passengerCount from context or query
  const basePrice = 200;
  const addOns = { insurance: true, extraBaggage: false, refundable: true };
  const passengerCount = 2;

  return (
    <PageWrapper>
      <Header />
      <main className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <form className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold">Guest Information</h2>
          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 dark:text-white"/>
          <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 dark:text-white"/>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700">
            Confirm & Pay
          </button>
        </form>
        <CheckoutSummary basePrice={basePrice} addOns={addOns} passengerCount={passengerCount} />
      </main>
      <Footer />
    </PageWrapper>
  );
}
