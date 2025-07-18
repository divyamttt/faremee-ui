export default function ClassSelector({ value, onChange }) {
  return (
    <select
      className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 dark:text-white"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="ECONOMY">Economy</option>
      <option value="PREMIUM_ECONOMY">Premium Economy</option>
      <option value="BUSINESS">Business</option>
      <option value="FIRST">First</option>
    </select>
  );
}
