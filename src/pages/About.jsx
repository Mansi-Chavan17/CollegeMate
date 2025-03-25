import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-xl my-12 text-gray-800">
      <h1 className="text-5xl font-bold mb-8 text-purple-800 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-24 after:h-1 after:bg-purple-500">About Collegemate</h1>
      
      <section className="mb-10 bg-white bg-opacity-70 p-6 rounded-lg shadow-md backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
          <span className="w-2 h-8 bg-blue-500 rounded mr-3"></span>
          Who We Are
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Collegemate is your ultimate guide to discovering the best colleges and universities. Created and managed by a passionate individual, this platform is designed to help students make informed decisions about their higher education by providing accurate, up-to-date, and detailed information about top colleges.
        </p>
      </section>
      
      <section className="mb-10 bg-white bg-opacity-70 p-6 rounded-lg shadow-md backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
          <span className="w-2 h-8 bg-blue-500 rounded mr-3"></span>
          Our Mission
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          I believe that every student deserves access to the best educational opportunities. My mission is to simplify the college selection process by offering a comprehensive database of institutions, complete with rankings, course details, fee structures, and student reviews.
        </p>
      </section>
      
      <section className="mb-10 bg-white bg-opacity-70 p-6 rounded-lg shadow-md backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
          <span className="w-2 h-8 bg-blue-500 rounded mr-3"></span>
          What We Offer
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mt-1 mr-3">✓</span>
            <div>
              <span className="font-semibold text-purple-700">Top College Listings:</span>
              <span className="text-gray-700"> A curated list of the best colleges based on academic excellence, student satisfaction, and career opportunities.</span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mt-1 mr-3">✓</span>
            <div>
              <span className="font-semibold text-purple-700">Detailed College Information:</span>
              <span className="text-gray-700"> Insights into courses, faculty, facilities, fees, scholarships, and more.</span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mt-1 mr-3">✓</span>
            <div>
              <span className="font-semibold text-purple-700">Comparison Tool:</span>
              <span className="text-gray-700"> Easily compare colleges based on key metrics.</span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mt-1 mr-3">✓</span>
            <div>
              <span className="font-semibold text-purple-700">Guidance and Tips:</span>
              <span className="text-gray-700"> Expert advice on applications, scholarships, and career planning.</span>
            </div>
          </li>
        </ul>
      </section>
      
      <section className="mb-10 bg-white bg-opacity-70 p-6 rounded-lg shadow-md backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
          <span className="w-2 h-8 bg-blue-500 rounded mr-3"></span>
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-4">
          <div className="bg-blue-50 p-5 rounded-lg text-center flex-1 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <p className="text-gray-700">Browse through the list of top colleges.</p>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg text-center flex-1 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <p className="text-gray-700">Compare colleges based on rankings, courses, and key factors.</p>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg text-center flex-1 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <p className="text-gray-700">Make an informed decision for your future.</p>
          </div>
        </div>
      </section>
      
      <section className="mb-6 bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-lg shadow-lg text-white">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg leading-relaxed mb-6">I'd love to hear from you! Whether you have questions, feedback, or partnership inquiries, feel free to reach out to me.</p>
        <div className="flex items-center bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300">
          <span className="text-2xl mr-3">📧</span>
          <span>Email: </span>
          <a href="mailto:mansichavan1704@gmail.com" className="ml-2 text-black font-medium hover:underline">
            mansichavan1704@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;