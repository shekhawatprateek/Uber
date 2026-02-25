import React, { createContext, useState } from "react";

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const updateCaptian = (captainData) => {
    setCaptain(captainData);
  };

  const value = {
    captain,
    setCaptain,
    loading,
    setLoading,
    error,
    setError,
    updateCaptian
  };

  return (
    <div>
      <CaptainDataContext value={value}>{children}</CaptainDataContext>
    </div>
  );
};

export default CaptainContext;
