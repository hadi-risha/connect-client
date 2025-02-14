import React from "react";
import notFound from '../../assets/userImages/notFound.png'
import { Link } from "react-router-dom";

const NotFound = () => {
  const userRole = localStorage.getItem("userRole")
  return (
    <div className="w-full h-[80vh] bg-[#757A95] flex items-center justify-center space-x-28">

      <img src={notFound} alt="not found image" className="w-52" />
      <div className="w-5/12 space-y-6">
        <p className="text-3xl text-white font-serif">Oops Error 404</p>
        <p className="text-xl text-[#CCCCCC]">The requested URL was not found on the serve</p>
        <p className="text-base text-[#CCCCCC]">Sorry we can't find the page you're looking for. Please make sure you've
          entered the correct address, or return to home.</p>
          <div className="mt-5">
            <Link to={`/${userRole}/home`} className="px-5 py-2 text-white rounded-full bg-[#FA6342]">Back to Home</Link>
          </div>
        
      </div>
    </div>
  );
};



export default NotFound
