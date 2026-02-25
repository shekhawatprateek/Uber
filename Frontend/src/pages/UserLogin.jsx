import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {user, setUser} = useContext(UserDataContext);

  async function submitHandler(e) {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      user,
    );

    // console.log(response);

    if (response.status === 200) {
      const data = response.data.token;

      const token = response.data.token;

      setUser(data)
      localStorage.setItem('token', token)
      navigate('/home')
    }

    setEmail("");
    setPassword("");
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
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eee] rounded px-4 py-2 mb-7 w-full text-lg placeholder:text-base"
            required
            type="email"
            placeholder="example@email.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eee] rounded px-4 py-2 mb-7 w-full text-lg placeholder:text-base"
            required
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold rounded px-4 py-2 mb-3 w-full text-lg">
            Login
          </button>
        </form>
        <p className="text-center">
          New Here ?{" "}
          <Link to="/signup" className="text-blue-600">
            create new account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="flex items-center justify-center bg-[#73BFCC] text-white font-semibold rounded px-4 py-2 mb-5 w-full text-lg"
        >
          Sign In as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
