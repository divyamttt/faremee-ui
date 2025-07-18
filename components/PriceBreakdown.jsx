export default function PriceBreakdown({ price }) {
  const base = (price * 0.8).toFixed(2);
  const fees = (price * 0.2).toFixed(2);
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-2">
      <h3 className="font-semibold mb-2">Fare Breakdown</h3>
      <div className="flex justify-between">
        <span>Base Fare</span>
        <span>${base}</span>
      </div>
      <div className="flex justify-between">
        <span>Taxes & Fees</span>
        <span>${fees}</span>
      </div>
      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span>${price.toFixed(2)}</span>
      </div>
    </div>
);
}
