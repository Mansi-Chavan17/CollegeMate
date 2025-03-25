import { useContext, useState } from "react";
import { CollegeContext } from "../context/CollegeContext";

const ExploreOptions = () => {
    const { data, loading, error } = useContext(CollegeContext);
    const [selectedCollege, setSelectedCollege] = useState(null);
    const [selectedBranch, setSelectedBranch] = useState(null);

    if (loading) {
        return <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>;
    }

    if (error) {
        return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
        </div>;
    }

    // Check if data is an object and extract the first key's value (array of colleges)
    const collegeArray = data && typeof data === "object" ? data[Object.keys(data)[0]] : [];

    if (!Array.isArray(collegeArray) || collegeArray.length === 0) {
        return <div className="text-center py-10 text-gray-500">No colleges data available</div>;
    }

    const handleCollegeSelect = (index) => {
        if (selectedCollege === index) {
            setSelectedCollege(null);
            setSelectedBranch(null);
        } else {
            setSelectedCollege(index);
            setSelectedBranch(null);
        }
    };

    const handleBranchSelect = (branch) => {
        setSelectedBranch(branch === selectedBranch ? null : branch);
    };

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Explore Colleges</h2>
            
            <div className="grid grid-cols-1 gap-4">
                {/* College List */}
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="bg-blue-600 px-4 py-3">
                        <h3 className="text-lg font-medium text-white">Select a College</h3>
                    </div>
                    <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
                        {collegeArray.map((college, index) => (
                            <div 
                                key={index} 
                                className={`px-4 py-3 cursor-pointer transition-colors duration-150 hover:bg-blue-50 ${selectedCollege === index ? 'bg-blue-50' : ''}`}
                                onClick={() => handleCollegeSelect(index)}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-medium">{college.college}</span>
                                    <svg className={`w-5 h-5 text-blue-500 transform transition-transform duration-200 ${selectedCollege === index ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Selected College Details */}
                {selectedCollege !== null && (
                    <div className="bg-white rounded-lg shadow overflow-hidden mt-4">
                        <div className="bg-blue-700 px-4 py-3">
                            <h3 className="text-lg font-medium text-white">{collegeArray[selectedCollege].college} Branches</h3>
                        </div>
                        <div className="p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                {collegeArray[selectedCollege].branches &&
                                    Object.keys(collegeArray[selectedCollege].branches).map((branch) => (
                                        <div 
                                            key={branch}
                                            className={`border rounded-lg p-3 cursor-pointer transition-all duration-200 ${selectedBranch === branch ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-gray-200 hover:border-blue-300'}`}
                                            onClick={() => handleBranchSelect(branch)}
                                        >
                                            <div className="font-medium text-blue-700">{branch}</div>
                                            {selectedBranch === branch && (
                                                <div className="mt-3 pt-3 border-t border-blue-200">
                                                    <h5 className="text-sm font-medium text-gray-600 mb-2">Categories:</h5>
                                                    <div className="space-y-2">
                                                        {collegeArray[selectedCollege].branches[branch].Categories &&
                                                            Object.keys(collegeArray[selectedCollege].branches[branch].Categories).map((category) => (
                                                                <div key={category} className="bg-white p-2 rounded border border-gray-100 shadow-sm">
                                                                    <div className="text-sm">
                                                                        <span className="font-medium text-gray-800">{category}</span>
                                                                        <div className="flex flex-wrap gap-3 mt-1 text-gray-600 text-xs">
                                                                            <span className="flex items-center">
                                                                                <svg className="w-3 h-3 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                                                    <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                                                </svg>
                                                                                Rank {collegeArray[selectedCollege].branches[branch].Categories[category].Rank}
                                                                            </span>
                                                                            <span className="flex items-center">
                                                                                <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                                                    <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 6a6 6 0 100-12 6 6 0 000 12z" />
                                                                                </svg>
                                                                                {collegeArray[selectedCollege].branches[branch].Categories[category].Percentile}%
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExploreOptions;