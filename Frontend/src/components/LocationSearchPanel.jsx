import React from "react";

const LocationSearchPanel = ({ setPanelOpen, setVehiclePanel }) => {
  const locations = [
    "466/11, Near Kabir Bhawan, Jacupura, Gurugram, In",
    "495 Shiv Sadan, Sector - 7 Gurugram, In",
    "166/12 Subash Nagar, Gurugram, In",
    "226, Tekchand Nagar, Daultabad, Gurugram, In",
  ];

  return (
    <div>
      {locations.map((data) => {
        return (
          <div
            key={data}
            onClick={() => {
              setVehiclePanel(true);
              setPanelOpen(false);
            }}
            className="flex gap-4 my-4 border-2 border-gray-50 active:border-black my-2 p-3 rounded-xl item-center justify-start "
          >
            <h2 className="bg-[#eee] h-8 w-12 flex justify-center item-center rounded-full">
              <i className="ri-map-pin-line "></i>
            </h2>
            <h4 className="font-medium">{data}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
