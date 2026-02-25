import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserProtectWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Moved above useEffect

  useEffect(() => {
    let isMounted = true;

    async function verifyToken() {
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.status === 200 && isMounted) {
          setUser(response.data.user);
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      }
    }

    verifyToken();

    return () => {
      isMounted = false;
    };
  }, [token, navigate, setUser]);

  // Immediate redirect if token missing
  if (!token) return <Navigate to="/login" replace />;

  // Show loading while verifying
  if (isLoading) return <div>Loading ...</div>;

  return <>{children}</>;
};

export default UserProtectWrapper;