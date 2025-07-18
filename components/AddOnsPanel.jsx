import { useState } from "react";

const ADD_ONS = [
  { key: "insurance", label: "Travel Insurance", price: 29.99 },
  { key: "extraBaggage", label: "Extra Baggage", price: 49.99 },
  { key: "refundable", label: "Make Fare Refundable", price: 79.99 },
];

export default function AddOnsPanel({ onChange }) {
  const [selected, setSelected] = useState({});

  const toggle = (key) => {
    setSelected((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      onChange(next);
      return next;
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
      <h3 className="text-lg font-semibold">Add-Ons</h3>
      {ADD_ONS.map(({ key, label, price }) => (
        <label key={key} className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={!!selected[key]}
              onChange={() => toggle(key)}
              className="h-4 w-4 text-blue-600"
            />
            <span>{label}</span>
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            +${price.toFixed(2)}
          </span>
        </label>
      ))}
    </div>
);
}
