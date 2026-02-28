import React from "react";
import { Link } from "react-router-dom";

const CurrentRide = () => {
  return (
    <div className="h-screen">
        <Link to="/home" className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
            <i className="text-lg font-medium ri-home-4-line"></i>
        </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:4800/format:webp/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="h-1/2 p-4 px-8">
        <div className="flex items-center justify-between">
          <img
            className="h-12"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Prateek</h2>
            <h4 className="text-lg font-semibold -mt-1 -mb-1">HR26 FS S8155</h4>
            <p className="text-sm text-gray-600">Honda Activa 7G</p>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex items-center gap-4 p-2 border-gray-200 border-b-2">
            <i className="text-lg ri-map-pin-line "></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-gray-500 text-small -m-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-2 ">
            <i class="text-lg ri-cash-fill"></i>
            <div>
              <h3 className="text-lg font-medium">₹199.50</h3>
              <p className="text-gray-500 text-small -m-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">Make a payment</button>
      </div>
    </div>
  );
};

export default CurrentRide;
