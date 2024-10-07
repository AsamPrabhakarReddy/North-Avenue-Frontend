import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

const SearchResults = ({ results }) => {
  const [customerData, setCustomerData] = useState({
    customer_name: '',
    customer_number: '',
    sale_price: '',
    sale_date: new Date().toISOString().split('T')[0], // Default to current date
  });

  const handleSellClick = async (vehicle) => {
    const { VIN, Selling_Price } = vehicle;

    // Show Swal input form for customer details
    const { value: formValues } = await Swal.fire({
      title: 'Enter Sale Details',
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Customer Name" required>
        <input id="swal-input2" class="swal2-input" placeholder="Customer Phone Number" required>
        <input id="swal-input3" class="swal2-input" placeholder="Sale Price" value="${Selling_Price}" required>
        <input id="swal-input4" type="date" class="swal2-input" placeholder="Sale Date" value="${new Date().toISOString().split('T')[0]}" required>
      `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          customer_name: document.getElementById('swal-input1').value,
          customer_number: document.getElementById('swal-input2').value,
          sale_price: parseFloat(document.getElementById('swal-input3').value),
          sale_date: document.getElementById('swal-input4').value,
        };
      },
    });

    if (formValues) {
      try {
        // Send a POST request to sell the car
        const response = await axios.post('http://localhost:9004/api/sellConfirmation', {
          customer_name: formValues.customer_name,
          customer_number: formValues.customer_number,
          sale_price: formValues.sale_price,
          sale_date: formValues.sale_date,
          VIN, // Pass the vehicle VIN
        });

        if (response.data.message === "Car successfully sold") {
          // Show success message using Swal
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Car successfully sold.',
          });
        } else {
          throw new Error('Failed to sell the car');
        }
      } catch (error) {
        console.error('Error during car sale:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'An error occurred while selling the car.',
        });
      }
    }
  };

  if (results.length === 0) return null; // Don't render if there are no results

  return (
    <div className="w-full max-w-[1400px] mx-auto mt-4 bg-gray-300 h-screen">
      <h3 className="text-lg font-bold mb-2 p-5">Search Results</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {results.map((vehicle) => (
          <div key={vehicle.VIN} className="border p-4 rounded-lg shadow-lg bg-white flex flex-col gap-[10px]">
            <h4 className="font-semibold">
              <p><strong>Vehicle Type:</strong> {vehicle.Manufacturer_name} </p>
            </h4>
            <p><strong>Model:</strong> {vehicle.Model_year}</p>
            <p><strong>VIN:</strong> {vehicle.VIN}</p>
            <p><strong>Type:</strong> {vehicle.Vehicle_Type}</p>
            <p><strong>Fuel:</strong> {vehicle.Fuel_type}</p>
            <p><strong>Color:</strong> {vehicle.Color}</p>
            <p><strong>Price:</strong> ${vehicle.Selling_Price.toLocaleString()}</p>
            <button
              type="button"
              onClick={() => handleSellClick(vehicle)} // Trigger the sell function on button click
              className="w-2/3 mx-auto px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Sell
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
