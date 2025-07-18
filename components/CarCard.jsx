export default function CarCard({ car }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <img src={car.image} alt="" className="h-24 w-full object-cover rounded" />
      <h3 className="mt-2 font-semibold">{car.model}</h3>
      <p className="text-sm text-gray-500">{car.supplier}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-xl font-bold">${car.price}/day</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Select</button>
      </div>
    </div>
);
}
