import { useState } from "react";


function InvertaryClerk()
{
    const [visible, isVisible] = useState(false);

    const handleClick = (e)=>{
        e.preventDefault();
        isVisible(!visible)
    }

    const [formData, setFormData] = useState({
        vin: '',
        vehicleType: '',
        manufacturerName: '',
        modelName: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send formData to the backend
        console.log(formData);
      };

    return(
        <div className="absolute w-screen h-screen flex items-center justify-center">
        <div className="max-w-[1400px] text-3xl flex items-center justify-center">
          <div className="flex flex-col items-center gap-[20px]">
            <h1 className="text-center font-bold text-4xl text-gray-500">Welcome to Inventory Clerk Page</h1>
            <p className="text-center font-semibold text-blue-500">What's on your mind, Found a new customer? Click on the Add Vehicle button.</p>
            <button onClick={handleClick} className="p-4 bg-green-600 text-white rounded-lg">Add Vehicle</button>
          </div>
        </div>
        {
        visible && (
            <div>
                <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-lg shadow-md w-[500px] h-auto">
                {/* VIN */}
                <div>
                    <label htmlFor="vin" className="block text-gray-700 font-bold mb-2">VIN</label>
                    <input
                    type="text"
                    id="vin"
                    name="vin"
                    value={formData.vin}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    required
                    />
                </div>

                {/* Vehicle Type */}
                <div>
                    <label htmlFor="vehicleType" className="block text-gray-700 font-bold mb-2">Vehicle Type</label>
                    <input
                    type="text"
                    id="vehicleType"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    required
                    />
                </div>

                {/* Manufacturer Name */}
                <div>
                    <label htmlFor="manufacturerName" className="block text-gray-700 font-bold mb-2">Manufacturer Name</label>
                    <input
                    type="text"
                    id="manufacturerName"
                    name="manufacturerName"
                    value={formData.manufacturerName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    required
                    />
                </div>

                {/* Model Name */}
                <div>
                    <label htmlFor="modelName" className="block text-gray-700 font-bold mb-2">Model Name</label>
                    <input
                    type="text"
                    id="modelName"
                    name="modelName"
                    value={formData.modelName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    required
                    />
                </div>

                {/* Submit Button */}
             <div className="flex justify-between w-2/3 mx-auto">
             <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-700"
                >
                    Add Vehicle
                </button>

                <button
                    onClick={handleClick}
                    className="px-6 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-700"
                >
                   Close
                </button>
             </div>

                </form>
                        </div>
                    )
                }
      </div>

      
      
    )
}

export default InvertaryClerk;