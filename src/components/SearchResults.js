import React from 'react';

const SearchResults = ({ results }) => {
  if (results.length === 0) return null; // Don't render if there are no results

  return (
    <div className="w-full max-w-[1400px] mx-auto mt-4 bg-gray-300 h-screen">
      <h3 className="text-lg font-bold mb-2 p-5">Search Results</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {results.map((vehicle) => (
          <div key={vehicle.VIN} className="border p-4 rounded-lg shadow-lg bg-white flex flex-col gap-[10px]">
            <h4 className="font-semibold">
            <p><strong>Vehicle Type:</strong>{vehicle.Manufacturer_name} </p>
            </h4>
            <p><strong>Model:</strong>{vehicle.Model_year}</p>
            <p><strong>VIN:</strong> {vehicle.VIN}</p>
            <p><strong>Type:</strong> {vehicle.Vehicle_Type}</p>
            <p><strong>Fuel:</strong> {vehicle.Fuel_type}</p>
            <p><strong>Color:</strong> {vehicle.Color}</p>
            <p><strong>Price:</strong> ${vehicle.Selling_Price.toLocaleString()}</p>
            <button
              type="submit"
              className="w-2/3 mx-auto px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
