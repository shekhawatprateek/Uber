import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainRegister from "./pages/CaptainRegister";
import { UserDataContext } from "./context/UserContext";
import Home from "./pages/Home";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";
import CurrentRide from "./pages/CurrentRide";

const App = () => {
  // const ans = useContext(UserDataContext)

  // console.log(ans)

  return (
    <Routes>
      <Route path="/" element={<Start />}></Route>
      <Route
        path="/home"
        element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
        }
      ></Route>
      <Route path="/current-ride" element={<CurrentRide />}></Route>
      <Route path="/signup" element={<UserSignUp />}></Route>
      <Route path="/login" element={<UserLogin />}></Route>
      <Route path="/captain-login" element={<CaptainLogin />}></Route>
      <Route path="/captain-signup" element={<CaptainRegister />}></Route>
      <Route
        path="user/logout"
        element={
          <UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
        }
      />
      <Route
        path="/captain-home"
        element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>
        }
      />
    </Routes>
  );
};

export default App;
