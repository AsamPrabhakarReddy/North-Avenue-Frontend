import { useState, useEffect } from 'react';

function Manager() {
    const [availableCarsCount, setAvailableCarsCount] = useState(0);
    const [pendingCarsCount, setPendingCarsCount] = useState(0);
    const [soldCarsCount, setSoldCarsCount] = useState(0);
    const [unsoldCarsCount, setUnsoldCarsCount] = useState(0);
    const [selectedOption, setSelectedOption] = useState('sold');

    // Fetch data when the component loads
    useEffect(() => {
        // Fetch Available Cars Count
        fetch('http://localhost:9004/api/getAvailableCars')
            .then((response) => response.json())
            .then((data) => setAvailableCarsCount(data[0]["available cars"])) // assuming data is an array
            .catch((error) => console.error('Error fetching available cars:', error));

        // Fetch Pending Cars Count
        fetch('http://localhost:9004/api/getPendingCars')
            .then((response) => response.json())
            .then((data) => setPendingCarsCount(data[0].Pending_Parts_Count)) // assuming data is an array
            .catch((error) => console.error('Error fetching pending cars:', error));

        // Fetch Sold Cars Count
        fetch('http://localhost:9004/api/getSoldCars')
            .then((response) => response.json())
            .then((data) => setSoldCarsCount(data[0].sold_Vehicles_Count)) // assuming data is an array
            .catch((error) => console.error('Error fetching sold cars:', error));

        // Fetch Unsold Cars Count
        fetch('http://localhost:9004/api/getUnsoldCars')
            .then((response) => response.json())
            .then((data) => setUnsoldCarsCount(data[0].Unsold_Vehicles_Count)) // assuming data is an array
            .catch((error) => console.error('Error fetching unsold cars:', error));
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center p-[50px]">
            <div className="absolute max-w-[1400px] mx-auto mt-[150px] flex flex-col p-5">
                <h1 className="text-gray-550 text-3xl text-center font-bold p-5">Welcome to Manager Page</h1>
                <div className="grid grid-cols-3 gap-10 ">
                    {/* Available Cars Count */}
                    <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-5 h-full ">
                        <h1 className="text-lg font-semibold">Available Cars Count</h1>
                        <p className="text-2xl font-bold">{availableCarsCount}</p>
                    </div>

                    {/* Pending Cars Count */}
                    <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-5 h-full">
                        <h1 className="text-lg font-semibold">Pending Cars Count</h1>
                        <p className="text-2xl font-bold">{pendingCarsCount}</p>
                    </div>

                    {/* Sold and Unsold Cars Selection */}
                    <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-5 h-full">
                        <h1 className="text-lg font-semibold">Sold vs Unsold Cars</h1>
                        <select 
                            className="mt-3 p-2 border border-gray-300 rounded"
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                        >
                            <option value="sold">Sold Cars</option>
                            <option value="unsold">Unsold Cars</option>
                        </select>

                        <p className="text-2xl font-bold mt-3">
                            {selectedOption === 'sold' ? soldCarsCount : unsoldCarsCount}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Manager;
