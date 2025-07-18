export default function ManageBooking({ booking = {}, onCancel }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
      <h3 className="text-lg font-semibold">Manage Your Booking</h3>
      <div className="flex justify-between">
        <span>Status:</span>
        <span className="font-medium">{booking.status || "N/A"}</span>
      </div>
      {booking.cancelable ? (
        <button
          onClick={() => onCancel && onCancel(booking.id)}
          className="w-full bg-red-600 text-white py-2 rounded-lg"
        >
          Cancel Booking
        </button>
      ) : (
        <p className="text-gray-500">This booking is non-refundable.</p>
      )}
    </div>
);
}
