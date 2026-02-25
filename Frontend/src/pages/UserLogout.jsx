import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogout = () => {
  const navigate = useNavigate();
  async function logoutHandler() {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/users/logout`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    );

    console.log(response.status);

    if (response.status === 200) {
      localStorage.removeItem("token");
      navigate("/login", { replace: true });
    }
  }

  return (
    <div>
      <button className="border border-blue" onClick={logoutHandler}>
        Log Out
      </button>
    </div>
  );
};

export default UserLogout;
