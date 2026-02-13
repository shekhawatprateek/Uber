import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  function submitHandler(e) {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });
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
          Join a fleet ?{" "}
          <Link to="/captain-signup" className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="flex items-center justify-center bg-[#BD771F] text-white font-semibold rounded px-4 py-2 mb-5 w-full text-lg"
        >
          Sign In as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
