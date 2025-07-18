import { useState } from "react";
import LocationInput from "./LocationInput";
import CalendarPicker from "./CalendarPicker";

export default function MultiCityForm({ onChange }) {
  const [legs, setLegs] = useState([
    { from: "", to: "", date: "" },
    { from: "", to: "", date: "" },
  ]);

  const updateLeg = (i, field, value) => {
    const next = [...legs];
    next[i] = { ...next[i], [field]: value };
    setLegs(next);
    onChange(next);
  };

  const addLeg = () => {
    if (legs.length < 6) {
      const next = [...legs, { from: "", to: "", date: "" }];
      setLegs(next);
      onChange(next);
    }
  };

  const removeLeg = (i) => {
    const next = legs.filter((_, idx) => idx !== i);
    setLegs(next);
    onChange(next);
  };

  return (
    <div className="space-y-4">
      {legs.map((leg, i) => (
        <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <LocationInput
            value={leg.from}
            onChange={(v) => updateLeg(i, "from", v)}
            placeholder="From"
          />
          <LocationInput
            value={leg.to}
            onChange={(v) => updateLeg(i, "to", v)}
            placeholder="To"
          />
          <CalendarPicker
            value={leg.date}
            onChange={(v) => updateLeg(i, "date", v)}
          />
          <div className="flex space-x-2">
            {i === legs.length - 1 && (
              <button
                onClick={addLeg}
                className="px-3 py-2 bg-blue-600 text-white rounded"
              >
                + Add
              </button>
            )}
            {legs.length > 2 && (
              <button
                onClick={() => removeLeg(i)}
                className="px-3 py-2 bg-red-600 text-white rounded"
              >
                Remove
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
