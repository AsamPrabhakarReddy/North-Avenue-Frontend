

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const SoldCars = () => {
    const [soldCars, setSoldCars] = useState([]); // State to hold the fetched sold cars data
    const [loading, setLoading] = useState(true); // Loading state for API call

    // Function to fetch the sold cars from the API
    const fetchSoldCars = async () => {
        try {
            const response = await axios.get('http://localhost:9004/api/getSoldCars'); // API call to get sold cars
            setSoldCars(response.data); // Set the fetched data to state
            console.log(response.data);
            setLoading(false); // Set loading to false once data is fetched
        } catch (error) {
            console.error('Error fetching sold cars:', error);
            Swal.fire({
                icon: 'error',
                title: 'Failed to fetch sold cars',
                text: error.response?.data?.message || 'Something went wrong!',
            });
            setLoading(false); // Stop loading on error
        }
    };

    // UseEffect to call fetchSoldCars on component mount
    useEffect(() => {
        fetchSoldCars();
    }, []);

    // Render the table if soldCars are available
    return (
        <div className="container max-w-[1400px] mx-auto flex flex-col items-center justify-center p-10 ">
            <h2 className="text-2xl font-bold mb-4 mx-auto text-center ">Sold Cars</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            
                            <th className="border p-2">Customer Name</th>
                            <th className="border p-2">Customer Number</th>
                            <th className="border p-2">Sold Price</th>
                            <th className="border p-2">Sold Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {soldCars.length > 0 ? (
                            soldCars.map((car, index) => (
                                <tr key={index} className="text-center">
                                
                                    <td className="border p-2">{car.customer_name}</td>
                                    <td className="border p-2">{car.customer_number}</td>
                                    <td className="border p-2">${car.sale_price}</td>
                                    <td className="border p-2">{car.sale_date}</td>
                                    
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center border p-2">No sold cars found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default SoldCars;
