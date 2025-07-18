export default function PackageCard({ pkg }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <img src={pkg.image} alt="" className="h-32 w-full object-cover rounded" />
      <h3 className="mt-2 font-semibold">{pkg.title}</h3>
      <p className="text-sm text-gray-500">{pkg.description}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-xl font-bold">${pkg.price}</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Select</button>
      </div>
    </div>
);
}
