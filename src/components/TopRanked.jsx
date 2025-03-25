import React from 'react';

const TopRanked = () => {
    const data = [
        { id: 1, name: "COEP Technological University", location: "Pune", img: "/assets/coep.jpeg", link: "https://www.coeptech.ac.in/", rating: 4.2 },
        { id: 2, name: "Veermata Jijabai Technological Institute", location: "Mumbai", img: "/assets/VJTI.webp", link: "https://vjti.ac.in/", rating: 4.1 },
        { id: 3, name: "SCTR'S Pune Institute of Computer Technology (PICT)", location: "Pune", img: "/assets/pict.jpeg", link: "https://pict.edu/", rating: 4.1 },
        { id: 4, name: "Sardar Patel College of Engineering  ", location: "Mumbai", img: "/assets/sp.jpeg", link: "https://www.spce.ac.in/", rating: 4.2 },
        { id: 5, name: "Walchand College of Engineering ", location: "Sangli", img: "/assets/walchand.jpeg", link: "https://www.walchandsangli.ac.in/", rating: 4.2 },
        { id: 6, name: "Vishwakarma Institute of Technology (VIT)", location: "Pune", img: "/assets/vit.jpeg", link: "https://www.vit.edu/", rating: 4.0 },
        { id: 7, name: "K. J. Somaiya College of Engineering", location: "Mumbai", img: "/assets/somaiya.jpeg", link: "https://kjsce.somaiya.edu/en/", rating: 4.1 },
        { id: 8, name: "PCCOE - Pimpri Chinchwad College Of Engineering", location: "Pune", img: "/assets/pccoe.jpeg", link: "https://www.pccoepune.com/", rating: 4.1 },
        { id: 9, name: "PVG's College of Engineering and Technology  ", location: "Pune", img: "/assets/pvg.jpeg", link: "https://www.pvgcoet.ac.in/", rating: 3.6 }
    ];

    // Function to render star ratings based on the actual rating value
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        // Add full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            );
        }
        
        // Add half star if needed
        if (hasHalfStar) {
            stars.push(
                <svg key="half" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <defs>
                        <linearGradient id="halfGradient">
                            <stop offset="50%" stopColor="currentColor" />
                            <stop offset="50%" stopColor="#e5e7eb" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#halfGradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            );
        }
        
        // Add empty stars
        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            );
        }
        
        return stars;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                        Elite Engineering Institutions
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover the top-ranked engineering colleges in India known for academic excellence and innovation
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((college) => (
                        <div
                            key={college.id}
                            className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="relative">
                                <img
                                    src={college.img || "/assets/default.jpeg"}
                                    alt={college.name}
                                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-blue-600 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                                    {college.id}
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                    {college.name}
                                </h2>
                                <div className="flex items-center text-gray-600 mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 text-blue-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    {college.location}
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-1">
                                        <div className="flex space-x-1">
                                            {renderStars(college.rating)}
                                        </div>
                                        <span className="ml-2 text-gray-600 font-medium">{college.rating}</span>
                                    </div>
                                    <button onClick={()=>window.open(college.link,"_blank")} className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-16 p-8 bg-white rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose These Colleges?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="bg-blue-100 p-3 rounded-full mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Academic Excellence</h3>
                            <p className="text-gray-600">Rigorous curriculum designed to challenge and inspire future engineers</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="bg-purple-100 p-3 rounded-full mb-4">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Industry Connections</h3>
                            <p className="text-gray-600">Strong partnerships with leading tech companies for internships and placements</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="bg-green-100 p-3 rounded-full mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Campus Facilities</h3>
                            <p className="text-gray-600">State-of-the-art labs, libraries, and innovation centers</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <footer className="mt-16 text-center text-gray-600">
                <p>© 2025 Elite Engineering College Rankings | All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default TopRanked;