import { useState } from "react";
import { useRouter } from "next/router";
import FlexibleDatesToggle from "./FlexibleDatesToggle";
import LocationInput from "./LocationInput";
import DatePicker from "./DatePicker";
import PassengerSelector from "./PassengerSelector";
import ClassSelector from "./ClassSelector";

export default function SearchBox({ service }) {
  const router = useRouter();
  const [tripType, setTripType] = useState("roundtrip");
  const [flexible, setFlexible] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [depart, setDepart] = useState("");
  const [retDate, setRetDate] = useState("");
  const [cabin, setCabin] = useState("ECONOMY");
  const [counts, setCounts] = useState({ adults: 1, children: 0, infants: 0 });

  const handleSearch = () => {
    if (!from || !to || !depart) return alert("Please fill origin, destination and departure date.");
    const query = {
      from, to, depart,
      cabin,
      adults: counts.adults,
      children: counts.children,
      infants: counts.infants,
      tripType
    };
    if (tripType === "roundtrip" && retDate) query.return = retDate;
    router.push({ pathname: `/search/${service}`, query });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg space-y-4">
      <div className="flex justify-between items-center">
        <div className="inline-flex bg-gray-100 dark:bg-gray-700 p-1 rounded-full">
          {[
            { key: "roundtrip", label: "Round Trip" },
            { key: "oneway", label: "One Way" },
            { key: "multicity", label: "Multi-City" }
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTripType(key)}
              className={`px-4 py-2 rounded-full font-medium ${
                tripType === key
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <FlexibleDatesToggle enabled={flexible} onChange={setFlexible} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <LocationInput
          value={from}
          onChange={setFrom}
          placeholder="From (city or airport)"
        />
        <LocationInput
          value={to}
          onChange={setTo}
          placeholder="To (city or airport)"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DatePicker label="Departure Date" value={depart} onChange={setDepart} />
        {tripType === "roundtrip" && (
          <DatePicker label="Return Date" value={retDate} onChange={setRetDate} />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PassengerSelector
          max={9}
          counts={counts}
          onChange={setCounts}
        />
        <ClassSelector value={cabin} onChange={setCabin} />
      </div>

      <button
        onClick={handleSearch}
        className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Search {service.charAt(0).toUpperCase() + service.slice(1)}
      </button>
    </div>
);
}
