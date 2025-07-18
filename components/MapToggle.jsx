export default function MapToggle({ showingMap, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-800"
    >
      {showingMap ? "Show List" : "Show Map"}
    </button>
);
}
