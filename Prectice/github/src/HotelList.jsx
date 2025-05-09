// HotelList.jsx
import React, { useEffect, useState } from 'react';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [formData, setFormData] = useState({ name: '', date: '' });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/typicode/demo/posts')
      .then(res => res.json())
      .then(data => {
        setHotels(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching hotels:", error);
        setLoading(false);
      });
  }, []);

  const handleBookClick = (hotel) => {
    setSelectedHotel(hotel);
    setBookingSuccess(false);
    setFormData({ name: '', date: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData, selectedHotel);
    setBookingSuccess(true);
    setSelectedHotel(null);
  };

  if (loading) return <p className="text-center text-gray-600">Loading hotels...</p>;

  return (
    <div className="p-4 bg-white rounded shadow max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Available Hotels</h2>

      {bookingSuccess && (
        <div className="bg-green-100 text-green-800 px-4 py-2 mb-4 rounded">
          Booking successful!
        </div>
      )}

      <ul className="space-y-4">
        {
        hotels.map(hotel => (
          <li key={hotel.id} className="border p-4 rounded shadow hover:shadow-md transition">
            <p className="text-lg font-semibold">{hotel.title}</p>
            <button
              onClick={() => handleBookClick(hotel)}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Book Now
            </button>
          </li>
        ))
        }
      </ul>

      {selectedHotel && (
        <div className="mt-6 p-4 border-t">
          <h3 className="text-xl font-semibold mb-2">Book: {selectedHotel.title}</h3>
          <form onSubmit={handleBookingSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default HotelList;
