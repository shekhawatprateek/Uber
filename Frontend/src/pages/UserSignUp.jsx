import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);

  async function submitHandler(e) {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
      fullname: {
        firstname,
        lastname,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser,
    );

    if (response.status === 201) {
      const data = response.data;
      
      setUser(data.user);
      navigate("/home");
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
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
          <h3 className="text-base font-medium mb-2">What's your email</h3>
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

          <h3 className="text-base font-medium mb-2">What's your email</h3>
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
          <button className="bg-[#111] text-white font-semibold rounded px-4 py-2 mb-3 w-full text-lg">
            Create Account
          </button>
        </form>
        <p className="text-center">
          Already have a account ?{" "}
          <Link to="/login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight text-gray-500">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline bold">Google Policy</span> and Terms of
          Service apply.
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
