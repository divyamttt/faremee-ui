// components/FilterSidebar.jsx
import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function FilterSidebar({ service, filters, onFiltersChange }) {
  const [local, setLocal] = useState(filters);

  const update = (key, value) => {
    const next = { ...local, [key]: value };
    setLocal(next);
    onFiltersChange(next);
  };

  return (
    <aside className="w-full lg:w-72 space-y-6">
      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-2">Price Range</h3>
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={local.priceMax}
          onChange={(e) => update("priceMax", Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>${local.priceMin}</span>
          <span>${local.priceMax}</span>
        </div>
      </div>

      {/* Flights filters */}
      {service === "flights" && (
        <>
          <div>
            <h3 className="font-semibold mb-2">Stops</h3>
            {["0", "1", "2", "3+"].map((s) => (
              <label key={s} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={local.stops.includes(s)}
                  onChange={(e) => {
                    const nextStops = e.target.checked
                      ? [...local.stops, s]
                      : local.stops.filter((x) => x !== s);
                    update("stops", nextStops);
                  }}
                />
                <span>{s === "0" ? "Non-stop" : `${s} stop${s !== "1" ? "s" : ""}`}</span>
              </label>
            ))}
          </div>

          <div>
            <h3 className="font-semibold mb-2">Airlines</h3>
            {filters.airlinesList.map((code) => (
              <label key={code} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={local.airlines.includes(code)}
                  onChange={(e) => {
                    const next = e.target.checked
                      ? [...local.airlines, code]
                      : local.airlines.filter((x) => x !== code);
                    update("airlines", next);
                  }}
                />
                <span>{code}</span>
              </label>
            ))}
          </div>
        </>
      )}

      {/* Hotels filters */}
      {service === "hotels" && (
        <>
          <div>
            <h3 className="font-semibold mb-2">Star Rating</h3>
            {[5, 4, 3, 2, 1].map((star) => (
              <label key={star} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={local.stars.includes(star)}
                  onChange={(e) => {
                    const next = e.target.checked
                      ? [...local.stars, star]
                      : local.stars.filter((x) => x !== star);
                    update("stars", next);
                  }}
                />
                <span>{star}★{star > 1 && "s"}</span>
              </label>
            ))}
          </div>

          <div>
            <h3 className="font-semibold mb-2">Property Type</h3>
            {["Hotel", "Apartment", "Resort", "Hostel"].map((type) => (
              <label key={type} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={local.propertyTypes.includes(type)}
                  onChange={(e) => {
                    const next = e.target.checked
                      ? [...local.propertyTypes, type]
                      : local.propertyTypes.filter((x) => x !== type);
                    update("propertyTypes", next);
                  }}
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </>
      )}

      {/* Car rentals filters */}
      {service === "car-rentals" && (
        <>
          <div>
            <h3 className="font-semibold mb-2">Vehicle Class</h3>
            {["Economy", "Compact", "SUV", "Luxury"].map((vc) => (
              <label key={vc} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={local.vehicleClasses.includes(vc)}
                  onChange={(e) => {
                    const next = e.target.checked
                      ? [...local.vehicleClasses, vc]
                      : local.vehicleClasses.filter((x) => x !== vc);
                    update("vehicleClasses", next);
                  }}
                />
                <span>{vc}</span>
              </label>
            ))}
          </div>

          <div>
            <h3 className="font-semibold mb-2">Suppliers</h3>
            {filters.suppliersList.map((sup) => (
              <label key={sup} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={local.suppliers.includes(sup)}
                  onChange={(e) => {
                    const next = e.target.checked
                      ? [...local.suppliers, sup]
                      : local.suppliers.filter((x) => x !== sup);
                    update("suppliers", next);
                  }}
                />
                <span>{sup}</span>
              </label>
            ))}
          </div>
        </>
      )}

      {/* Vacation packages filters */}
      {service === "vacation-packages" && (
        <>
          <div>
            <h3 className="font-semibold mb-2">Flexible Dates</h3>
            <div className="flex items-center space-x-2">
              <Switch
                checked={local.flexibleDates}
                onChange={(val) => update("flexibleDates", val)}
                className={`${
                  local.flexibleDates ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 rounded-full transition`}
              >
                <span
                  className={`${
                    local.flexibleDates ? "translate-x-6" : "translate-x-1"
                  } inline-block w-4 h-4 transform bg-white rounded-full transition`}
                />
              </Switch>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Activity Type</h3>
            {["Tour", "Cruise", "Adventure", "Relaxation"].map((act) => (
              <label key={act} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={local.activities.includes(act)}
                  onChange={(e) => {
                    const next = e.target.checked
                      ? [...local.activities, act]
                      : local.activities.filter((x) => x !== act);
                    update("activities", next);
                  }}
                />
                <span>{act}</span>
              </label>
            ))}
          </div>
        </>
      )}
    </aside>
  );
}
