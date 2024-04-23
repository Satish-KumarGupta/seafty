import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
const Protected = ({ children }) => {
  let location = useLocation();
  const pathname=location.pathname;

  const [isAuth, setIsAuth] = useState(
    () => typeof window !== "undefined" && sessionStorage.getItem("jwt")
  );

  useEffect(() => {

    const storedToken = sessionStorage.getItem("jwt");
    setIsAuth(!!storedToken); // Set isAuth based on whether token is present
  }, [pathname]);

//   useEffect(() => {
//     if (!isAuth && pathname !== '/auth/signup') {
//       Navigate('/auth/login');
//     } else if (!isAuth && pathname !== '/auth/login') {
//       Navigate('/auth/signup');
//     } else {
//       Navigate(pathname);
//     }
//   }, [isAuth]);

  return isAuth ? children : <Navigate to="/login" replace />;
};

export default Protected;
