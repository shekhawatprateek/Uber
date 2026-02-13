import React, {useContext} from 'react'
import {Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';
import CaptainLogin from './pages/CaptainLogin';
import CaptainRegister from './pages/CaptainRegister';
import { UserDataContext } from './context/UserContext';



const App = () => {

  const ans = useContext(UserDataContext)

  console.log(ans)

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<UserSignUp />}></Route>
      <Route path="/login" element={<UserLogin />}></Route>
      <Route path="/captain-login" element={<CaptainLogin />}></Route>
      <Route path="/captain-signup" element={<CaptainRegister />}></Route>
    </Routes>
  )
}

export default App
