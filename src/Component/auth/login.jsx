import React from "react";

const Login = () => {
  return (
    <div>
      <div className="flex flex-col justify-start absolute top-[5%] sm:left-[5%] right-[5%]">
        <img
          className="w-[187px]"
          src="https://cdn.velocityvue.com/safety-assist-logo/safety-assist-logo.png"
          alt="logo"
        />
      </div>
      <div className=" w-full sm:flex justify-center object-contain bg-no-repeat absolute top-[100px] ">
        <img
            className="w-[80%] m-auto"
          src="https://uat.safetyassist.velocityvue.com/static/media/city-background-x2.3a8d7783.png"
          alt="logo"
        />
        <div className="absolute  sm:top-1/2 top-64   sm:items-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center w-full h-full">
          <form className="sm:m-auto w-[470px] h-[414px] p-[34px] sm:shadow-[0_3px_15px_rgba(0,0,0,.16)] sm:bg-[#fff]  box-border rounded-[4px]">
            
            <h1 className="font-bold text-[30px] leading-35 font-roboto font-sans mb-[18px]">Login</h1>
            <p className="text-[#707070EF]">Welcome back! Please login to your account.</p>
                        
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
