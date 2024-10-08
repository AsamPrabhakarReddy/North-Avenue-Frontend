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
        // 1. Send the data to sell the car
        const response = await axios.post('http://localhost:9004/api/sellConfirmation', {
          customer_name: formValues.customer_name,
          customer_number: formValues.customer_number,
          sale_price: formValues.sale_price,
          sale_date: formValues.sale_date,
          VIN, // Pass the vehicle VIN
        });
  
        if (response.data.message === "Car successfully sold") {
          // 2. Once the car is successfully sold, delete the vehicle from the database
          const deleteResponse = await axios.delete('http://localhost:9004/api/deleteVehicleAfterSold', {
            data: { VIN } // Pass the VIN in the request body
          });
  
          if (deleteResponse.data.message === "Vehicle successfully deleted") {
            // Show success message for both operations
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Car successfully sold and deleted from the database.',
            });
          } else {
            throw new Error('Failed to delete vehicle');
          }
        } else {
          throw new Error('Failed to sell the car');
        }
      } catch (error) {
        console.error('Error during car sale or deletion:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'An error occurred while selling or deleting the car.',
        });
      }
    }
  };
  

  // If no results, show a message
 

  return (
    <div className="absolute w-full min-h-screen flex flex-col items-center justify-start bg-gray-100 p-4">
      <h3 className="text-lg font-bold mb-4">Search Results</h3>
      
      {/* Full-screen flex container with a responsive grid layout */}
      <div className="grid grid-cols-2  gap-4 w-full max-w-screen-xl">
        {results.map((vehicle) => (
          <div
            key={vehicle.VIN}
            className="border p-4 rounded-lg shadow-lg bg-white flex flex-col gap-4 justify-between"
          >
            <h4 className="font-semibold">
              <p><strong>Vehicle Type:</strong> {vehicle.Manufacturer_name}</p>
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
              className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
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
