import React from 'react'

const VehiclePanel = ({setVehiclePanel, setConfirmRidePanel}) => {
  return (
    <div>
       <h5 onClick={() => {setVehiclePanel(false)}} className="w-[94%] p-3 text-center absolute top-0"><i className="text-3xl text-gray-600  ri-arrow-down-wide-line"></i></h5>
        <h3 className="font-semibold text-2xl mb-2">Choose a vehicle</h3>
        <div onClick={() => {setConfirmRidePanel(true); setVehiclePanel(false)}} className="flex border-2 border-transparent mb-4 bg-gray-100 rounded-xl p-3 w-full items-center justify-between active:border-black">
          <img
            className="h-18 w-18 object-contain"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className="w-1/2 content-center">
            <h4 className="font-medium text-base">
              Uber Go{" "}
              <span>
                <i className="ri-user-fill"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-[#aeaeae]">
              Affordable, compact rides
            </p>
          </div>
          <h2 className="text-xl font-semibold content-center">₹159.40</h2>
        </div>

        <div className="flex border-2 border-transparent mb-4 bg-gray-100 rounded-xl p-3 w-full items-center justify-between active:border-black">
          <img
            className="h-18 w-18 object-contain"
            src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=1344/height=896/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NTM4NTEyZC1mZGUxLTRmNzMtYmQ1MS05Y2VmZjRlMjU0ZjEucG5n"
            alt=""
          />
          <div className="w-1/2 content-center">
            <h4 className="font-medium text-base">
              Moto{" "}
              <span>
                <i className="ri-user-fill"></i>2
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-[#aeaeae]">
              Affordable bike rides
            </p>
          </div>
          <h2 className="text-xl font-semibold content-center">₹59.40</h2>
        </div>

        <div className="flex border-2 border-transparent mb-4 bg-gray-100 rounded-xl p-3 w-full items-center justify-between active:border-black">
          <img
            className="h-18 w-18 object-contain"
            src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png"
            alt=""
          />
          <div className="w-1/2 content-center">
            <h4 className="font-medium text-base">
              Uber Auto{" "}
              <span>
                <i className="ri-user-fill"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-[#aeaeae]">
              Affordable auto rides
            </p>
          </div>
          <h2 className="text-xl font-semibold content-center">₹99.40</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
