export default function Pagination({ page, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex space-x-2 justify-center mt-6">
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`px-3 py-1 rounded ${
            p === page ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          {p}
        </button>
      ))}
    </div>
);
}
