import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const navigate = useNavigate();

  const { captain, setCaptain } = useContext(CaptainDataContext);

  async function submitHandler(e) {
    e.preventDefault();
    const captainData = {
      email: email,
      password: password,
      fullname: {
        firstname,
        lastname,
      },
      vechile: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vechileType: vehicleType,
      },

    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captain/register`,
      captainData,
    );

    if(response.status === 201){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  }

  return (
    <div className=" h-screen p-7 flex flex-col justify-between">
      <div>
        <img
          className="border border-green-500 w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="under-logo"
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-base font-medium mb-2">
            What's our captain's name{" "}
          </h3>
          <div className="flex gap-4 mb-5">
            {" "}
            <input
              className="bg-[#eee] rounded px-4 py-2 w-1/2 text-base placeholder:text-sm"
              required
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="bg-[#eee] rounded px-4 py-2 w-1/2 text-base placeholder:text-sm"
              required
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h3 className="text-base font-medium mb-2">
            What's our captain's email
          </h3>
          <input
            className="bg-[#eee] rounded px-4 py-2 mb-5 w-full text-base placeholder:text-sm"
            required
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eee] rounded px-4 py-2 mb-5 w-full text-base placeholder:text-sm"
            required
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-4 mb-2">
            <input
              className="bg-[#eee] rounded w-1/2 px-4 py-2 mb-4 w-full text-base placeholder:text-sm"
              required
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input
              className="bg-[#eee] rounded w-1/2 px-4 py-2 mb-4 w-full text-base placeholder:text-sm"
              required
              type="text"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
          </div>
          <div className="flex gap-4 mb-2">
            <input
              className="bg-[#eee] rounded w-1/2 px-4 py-2 mb-4 w-full text-base placeholder:text-sm"
              required
              type="number"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
            <select
              className="bg-[#eee] rounded w-1/2 px-4 py-2 mb-4 w-full text-base placeholder:text-sm"
              required
              type="text"
              placeholder="Vehicle Plate"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="motorcycle">motorcycle</option>
            </select>
          </div>

          <button className="bg-[#111] text-white font-semibold rounded px-4 py-2 mb-3 w-full text-lg">
            Create Account
          </button>
        </form>
        <p className="text-center">
          Already have a account ?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight text-gray-500">
          This site is protected by reCAPTCHA and the Google Policy and Terms of
          Service apply.
        </p>
      </div>
    </div>
  );
};

export default CaptainRegister;
