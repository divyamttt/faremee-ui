export default function CheckoutSummary({ basePrice, addOns = {}, passengerCount = 1 }) {
  const addOnPrices = { insurance: 29.99, extraBaggage: 49.99, refundable: 79.99 };
  const addOnTotal = Object.entries(addOns).reduce(
    (sum, [key, sel]) => sum + (sel ? addOnPrices[key] : 0),
    0
  );
  const flightsCost = basePrice * passengerCount;
  const total = flightsCost + addOnTotal;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
      <h3 className="text-lg font-semibold">Order Summary</h3>
      <div className="flex justify-between">
        <span>Flight × {passengerCount}</span>
        <span>${flightsCost.toFixed(2)}</span>
      </div>
      {addOns.insurance && (
        <div className="flex justify-between">
          <span>Travel Insurance</span>
          <span>$29.99</span>
        </div>
      )}
      {addOns.extraBaggage && (
        <div className="flex justify-between">
          <span>Extra Baggage</span>
          <span>$49.99</span>
        </div>
      )}
      {addOns.refundable && (
        <div className="flex justify-between">
          <span>Refundable Upgrade</span>
          <span>$79.99</span>
        </div>
      )}
      <div className="border-t pt-2 flex justify-between font-bold">
        <span>Total Due</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
);
}
