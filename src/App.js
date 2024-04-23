import React, { useState, useEffect } from "react";
import {  Route, Routes, Navigate, useNavigate } from "react-router-dom";
import ForgetPassword from "./Component/auth/forget-password";
import Login from "./Component/auth/login";
import Protected from "./Component/auth/protected";
import Home from "./Component/pages/home";
import { useLocation } from 'react-router-dom';
const App=()=>  {
  const navigate=useNavigate();
  let location = useLocation();
  const pathname=location.pathname;

  const [isAuth, setIsAuth] = useState(
    () => typeof window !== "undefined" && sessionStorage.getItem("jwt")
  );
    console.log(isAuth);
  useEffect(() => {
        if (!isAuth && pathname !== '/signup') {
          navigate('/login');
        } else if (!isAuth && pathname !== '/login') {
          navigate('/signup');
        } else {
          navigate(pathname);
        }
      }, [isAuth]);
  return (
    <>
    
      <Routes>
        {isAuth && pathname === '/login'?
        navigate('/')
        :
        <>
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ForgetPassword />} />
        </>
        }
      </Routes>
    
      <Routes>
        <Route path="/" element={<Protected> <Home /></Protected>} />
       
      </Routes>
    </>
  );
};



export default App;
