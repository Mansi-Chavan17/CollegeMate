import { useEffect, useState } from "react";
import axios from "axios";

const Colleges = () => {
  const [data, setData] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://collegemate-392e2-default-rtdb.firebaseio.com/collegelist.json"
        );

        if (res.data) {
          const collegeArr = Object.values(res.data)[0];
          setData(collegeArr || []);
        }
      } catch (error) {
        console.log("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, statusFilter]);

  const filteredData = data
    .filter((college) => (statusFilter ? college.Status === statusFilter : true))
    .filter((college) =>
      search
        ? college["Institute Name"].toLowerCase().includes(search.toLowerCase()) ||
          college["Institute Code"].toLowerCase().includes(search.toLowerCase())
        : true
    );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const allStatuses = [...new Set(data.map((college) => college.Status))];

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrePage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const statusColors = {
    Government: "bg-blue-500 text-white",
    "Un-Aided": "bg-red-500 text-white",
    University: "bg-green-500 text-white",
    "Deemed University": "bg-purple-500 text-white",
    Autonomous: "bg-yellow-500 text-black",
    Aided: "bg-pink-500 text-white",
    "Religious Minority": "bg-indigo-500 text-white",
    "Linguistic Minority": "bg-teal-500 text-white",
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-xl rounded-lg border border-gray-200">
      <h1 className="text-3xl font-extrabold text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-md">
        🎓 Colleges List
      </h1>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 my-6">
        <div className="w-full md:w-1/2">
          <div className="relative">
            <input
              type="text"
              placeholder="🔍 Search by name or code..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full md:w-auto">
          <div className="flex items-center">
            <label className="mr-2 font-semibold text-gray-700">Filter by Status:</label>
            <select
              onChange={(e) => setStatusFilter(e.target.value)}
              value={statusFilter}
              className="border border-gray-300 rounded-full px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            >
              <option value="">All Statuses</option>
              {allStatuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mb-4 text-sm text-gray-600">
        📌 Showing <span className="font-semibold">{filteredData.length}</span> of {data.length} colleges
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-indigo-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Institute Code</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Institute Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {loading ? (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-center text-sm text-gray-500">
                  <div className="flex justify-center items-center">
                    <svg className="animate-spin h-5 w-5 mr-3 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading colleges...
                  </div>
                </td>
              </tr>
            ) : paginatedData.length > 0 ? (
              paginatedData.map((college, index) => (
                <tr key={index} className="hover:bg-gray-100 transition duration-200">
                  <td className="px-6 py-4 font-medium">{college["Institute Code"]}</td>
                  <td className="px-6 py-4 text-gray-700">{college["Institute Name"]}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[college.Status] || "bg-gray-500 text-white"}`}>
                      {college.Status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-center text-sm text-gray-500">❌ No colleges found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button onClick={handlePrePage} disabled={currentPage === 1} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">Previous</button>
        <span className="text-lg font-semibold">Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage >= totalPages} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">Next</button>
      </div>
    </div>
  );
};

export default Colleges;
