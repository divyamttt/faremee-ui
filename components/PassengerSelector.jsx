import { useState, useRef, useEffect } from "react";

export default function PassengerSelector({ max = 9, counts, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const total = counts.adults + counts.children + counts.infants;

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const change = (key, delta) => {
    onChange((prev) => {
      const next = prev[key] + delta;
      if (next < 0 || (delta > 0 && total >= max)) return prev;
      return { ...prev, [key]: next };
    });
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full p-3 border rounded-lg text-left"
      >
        {`${counts.adults} Adults, ${counts.children} Children, ${counts.infants} Infants`}
      </button>
      {open && (
        <div className="absolute bg-white dark:bg-gray-800 p-4 shadow rounded-lg w-full">
          {["adults", "children", "infants"].map((k) => (
            <div key={k} className="flex justify-between items-center my-2">
              <span className="capitalize">{k}</span>
              <div className="flex items-center space-x-2">
                <button
                  disabled={counts[k] === 0}
                  onClick={() => change(k, -1)}
                  className="px-2"
                >
                  –
                </button>
                <span>{counts[k]}</span>
                <button
                  disabled={total >= max}
                  onClick={() => change(k, 1)}
                  className="px-2"
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <p className="text-xs text-gray-500">Up to {max} passengers total</p>
        </div>
      )}
    </div>
  );
}
