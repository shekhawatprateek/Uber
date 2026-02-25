import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainProtectWrapper = ({ children }) => {
  const { captain, setCaptain, loading, setLoading } =
    useContext(CaptainDataContext);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    let isMounted = true;

    const verifyCaptain = async () => {
      if (!token) {
        navigate("/captain-login");
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captain/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (response.status === 200 && isMounted) {
          setCaptain(response.data.captain);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          localStorage.removeItem("token");
          navigate("/captain-login");
        }
      }
    };

    verifyCaptain();

    return () => {
      isMounted = false;
    };
  }, [token, navigate, setCaptain, setLoading]);

  // Immediate guard
  if (!token) {
    return <Navigate to="/captain-login" replace />;
  }

  // Wait for verification
  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectWrapper;
