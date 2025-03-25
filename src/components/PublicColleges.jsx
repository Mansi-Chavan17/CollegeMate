import { useEffect, useState } from "react";
import axios from "axios";

const PublicColleges = () => {
    const [colleges, setColleges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await axios.get(
                "https://collegemate-392e2-default-rtdb.firebaseio.com/gCollege.json"
            );
            const data = res.data;

            if (data) {
                // Extract the first dynamic key from gCollege
                const firstKey = Object.keys(data)[0]; // "-OLcUK5l6PbmvhQBKCiy"

                // Get the actual colleges array
                const collegesArray = data[firstKey].Government_Engineering_Colleges_Maharashtra;

                setColleges(collegesArray);
                console.log(collegesArray); // ✅ Logs the correct array
            } else {
                setColleges([]); // Handle empty response
                console.log("No data available");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Failed to load college data. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Government Engineering Colleges in Maharashtra</h2>
            
            {loading ? (
                <div className="flex justify-center items-center h-32">
                    <div className="animate-pulse text-blue-600">Loading data...</div>
                </div>
            ) : error ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
                    <p>{error}</p>
                </div>
            ) : colleges.length === 0 ? (
                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
                    <p>No college data available.</p>
                </div>
            ) : (
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <ul className="divide-y divide-gray-200">
                        {colleges.map((elem, index) => (
                            <li 
                                key={index} 
                                className="p-4 hover:bg-gray-50 transition duration-150 flex justify-between items-center"
                            >
                                <div className="flex-1">
                                    <h3 className="font-medium text-gray-900">{elem.name}</h3>
                                    <p className="text-gray-600 text-sm mt-1">{elem.location}</p>
                                </div>
                                <div className="ml-4">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                        Government
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PublicColleges;