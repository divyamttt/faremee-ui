export default function HotelCard({ hotel }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <img src={hotel.image} alt="" className="h-32 w-full object-cover rounded" />
      <h3 className="mt-2 font-semibold">{hotel.name}</h3>
      <p className="text-sm text-gray-500">{hotel.location}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-xl font-bold">${hotel.price}</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Select</button>
      </div>
    </div>
);
}
