import React from "react";

const LookingForDriver = ({ setVehicleFound }) => {
  return (
    <div>
      <h5
        onClick={() => {
          setVehicleFound(false);
        }}
        className="w-[94%] p-3 text-center absolute top-0"
      >
        <i className="text-3xl text-gray-600  ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="font-semibold text-2xl mb-2">Looking for a Driver</h3>
      <div className="flex gap-2 justify-between flex-col items-center">
        <img
          className="h-20"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className="w-full ">
          <div className="flex items-center gap-5 p-3 border-gray-200 border-b-2">
            <i className="text-lg ri-map-pin-user-line "></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-gray-500 text-small -m-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-gray-200 border-b-2">
            <i className="text-lg ri-map-pin-line "></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-gray-500 text-small -m-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
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
      </div>
    </div>
  );
};

export default LookingForDriver;
