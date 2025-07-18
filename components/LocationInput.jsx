import { useState, useEffect } from "react";

export default function LocationInput({ value, onChange, placeholder }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!value || value.length < 2) return setList([]);
    fetch(`/api/locations?query=${encodeURIComponent(value)}`)
      .then((r) => r.json())
      .then(setList)
      .catch(() => setList([]));
  }, [value]);

  return (
    <div className="relative">
      <input
        list="locs"
        className="w-full p-3 border rounded-lg"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <datalist id="locs">
        {list.map((l) => (
          <option key={l.id} value={`${l.name} (${l.code})`} />
        ))}
      </datalist>
    </div>
  );
}
