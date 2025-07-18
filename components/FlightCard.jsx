export default function FlightCard({ flight }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={flight.airlineLogo} alt="" className="h-6 w-6" />
          <span className="font-semibold">{flight.airlineName}</span>
        </div>
        {flight.refundable ? (
          <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Refundable</span>
        ) : (
          <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded">Non-refundable</span>
        )}
      </div>
      <div className="grid grid-cols-3 text-center">
        <div>
          <p className="font-bold">{flight.departTime}</p>
          <p className="text-xs">{flight.departAirport}</p>
        </div>
        <div>
          <p className="text-xs">{flight.duration}</p>
          <p className="text-xs text-gray-500">{flight.stops} stops</p>
        </div>
        <div>
          <p className="font-bold">{flight.arriveTime}</p>
          <p className="text-xs">{flight.arriveAirport}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">${flight.price}</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Select
        </button>
      </div>
    </div>
);
}
