

function Manager()
{
    return(
        <div className="w-full h-full flex items-center justify-center">
    <div className="absolute max-w-[1400px] mx-auto mt-[150px] flex flex-col p-5">
        <h1 className="text-gray-550 text-3xl text-center font-bold p-5">Welcome to Manager Page</h1>
        <div className="grid grid-cols-3 gap-10 ">
            {/* Available Cars Count */}
            <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-5 h-full ">
                <h1 className="text-lg font-semibold">Available Cars Count</h1>
                <p className="text-2xl font-bold">10</p>
            </div>

            {/* Pending Cars Count */}
            <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-5 h-full">
                <h1 className="text-lg font-semibold">Pending Cars Count</h1>
                <p className="text-2xl font-bold">5</p> 
            </div>

            {/* Sold and Unsold Cars Selection */}
            <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-5 h-full">
                <h1 className="text-lg font-semibold">Sold vs Unsold Cars</h1>
                <select className="mt-3 p-2 border border-gray-300 rounded">
                    <option value="sold">Sold Cars</option>
                    <option value="unsold">Unsold Cars</option>
                </select>
            </div>
        </div>
    </div>
</div>


    )
}

export default Manager;