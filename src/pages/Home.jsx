import React, { useState } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';



export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Featured colleges data
  const featuredColleges = [
    { 
      name: "COEP Technological University", 
      location: "Pune,Maharashtra", 
      programs: 120, 
      students: "15,000+",
      image: "/assets/coep.jpeg"
    },
    { 
      name: "Veermata Jijabai Technological Institute", 
      location: "Mumbai,Maharashtra", 
      programs: 85, 
      students: "12,500+",
      image: "/assets/VJTI.webp" 
    },
    { 
      name: "SCTR'S Pune Institute of Computer Technology (PICT)", 
      location: "Pune,Maharashtra", 
      programs: 92, 
      students: "18,200+",
      image: "/assets/pict.jpeg" 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-4xl font-bold tracking-tight text-center sm:text-5xl lg:text-6xl">
            Find Your Perfect College
          </h1>
          <p className="mt-6 max-w-2xl text-center text-xl">
            Comprehensive data on thousands of colleges to help you make informed decisions about your education future.
          </p>
          
          {/* Search Box */}
          <div className="mt-10 w-full max-w-2xl">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search for colleges..."
                className="w-full h-14 pl-12 pr-4 rounded-full bg-white text-black shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-4 text-gray-400 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <button className="absolute right-1 h-12 rounded-full px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium">
                Search
              </button>
            </div>
          </div>
          
          {/* Quick Access Buttons */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-2 w-full max-w-3xl">
            <button className="flex flex-col items-center justify-center h-24 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl border-none transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              <Link to="/top-ranked">Top Ranked</Link>
            </button>
            <button className="flex flex-col items-center justify-center h-24 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl border-none transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <Link to="/publicCollege">Public Colleges</Link>
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Total Colleges</p>
                <h3 className="text-3xl font-bold">250+</h3>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
          
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-amber-600">Student Reviews</p>
                <h3 className="text-3xl font-bold">1000+</h3>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
          
        </div>
        
        {/* Featured Colleges */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Featured Colleges</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredColleges.map((college, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="h-48 w-full overflow-hidden">
                  <img src={college.image} alt={college.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{college.name}</h3>
                  <p className="text-gray-500 flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {college.location}
                  </p>
                  <div className="flex justify-between text-sm mb-6">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span>{college.programs} Programs</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span>{college.students} Students</span>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-200">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        
        
        {/* Call to Action */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 shadow-xl">
          <div className="md:flex md:items-center md:justify-between">
            <div className="max-w-2xl text-white">
              <h2 className="text-2xl font-bold tracking-tight">Ready to find your perfect college match?</h2>
              <p className="mt-3 text-lg">
              Start your journey to find your ideal campus, compare programs, and receive tailored college recommendations
              </p>
            </div>
            <div className="mt-6 flex md:mt-0">
              <Link to="/explore" className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-bold text-lg shadow-md transition duration-200">
                Explore Your Options
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">College Mate</h3>
              <p className="text-gray-400">
                Your comprehensive source for college data and information to make informed decisions about your education future.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">College Rankings</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Scholarships</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Financial Aid</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Application Guides</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Explore</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">All Colleges</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Programs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Locations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">College Reviews</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Email Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 College Finder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}