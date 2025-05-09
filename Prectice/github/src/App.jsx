import React from 'react';
import HotelList from './HotelList';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-blue-600 text-white p-4 rounded shadow mb-6">
        <h1 className="text-3xl font-bold text-center">Welcome to Hotel Booking</h1>
      </header>
      <main className="max-w-4xl mx-auto">
        <HotelList />
      </main>
      <footer className="text-center mt-12 text-gray-500">
        &copy; {new Date().getFullYear()} Hotel Booking. All rights reserved.
      </footer>
    </div>
  );
};

export default App;