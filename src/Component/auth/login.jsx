import React, { useState } from "react";
import { Input, Form, Button, Checkbox } from "antd";
import {
  MailFilled,
  LockFilled,
  EyeFilled,
  EyeInvisibleFilled,
} from "@ant-design/icons";
import { Link,  useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate();
  const onFinish = async (values) => {
    console.log("Received values:", values);

    const response=await fetch("http://localhost:5000/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email:email,
        password:password,
      
      }),
    })
    const result = await response.json();
    console.log("data",result.data);
    if(result.success === true){
     navigate('/')
     sessionStorage.setItem("jwt","abcd") 
    }else{
      alert(result.message)
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };
  const validateEmail = (rule, value, callback) => {
    if (!value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      callback();
    } else {
      callback("Please input a valid email address!");
    }
  };

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
          src="./images/city-background.png"
          alt="logo"
        />
        <div className="absolute  sm:top-1/2 top-64   sm:items-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center w-full h-full">
          <Form
            name="login-form"
            onFinish={onFinish}
            initialValues={{ remember: true }}
            layout="vertical"
            className="sm:m-auto w-[470px] h-[414px] p-[34px] sm:shadow-[0_3px_15px_rgba(0,0,0,.16)] sm:bg-[#fff]  box-border rounded-[4px]"
          >
            <h1 className="font-bold text-[30px] leading-35 font-roboto font-sans mb-[18px]">
              Login
            </h1>
            <p className="text-[#707070EF] mb-[18px]">
              Welcome back! Please login to your account.
            </p>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { validator: validateEmail },
              ]}
            >
              <Input
                prefix={
                  <MailFilled
                    style={{ color: "rgba(0,0,0,.25)" }}
                    className="text-xl"
                  />
                }
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input
                prefix={
                  <LockFilled
                    style={{ color: "rgba(0,0,0,.25)" }}
                    className="text-xl"
                  />
                }
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                suffix={
                  <span onClick={handleTogglePasswordVisibility}>
                    {showPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
                  </span>
                }
              />
            </Form.Item>

            <Form.Item>
              <div className="w-full flex justify-between m-auto items-center">
                <Checkbox
                  onChange={handleCheckboxChange}
                  className={`${
                    checked ? "  text-gray-700 " : "text-gray-600"
                  }`}
                  checked={checked}
                >
                  Remember password
                </Checkbox>
                <Link
                  to={"/reset-password"}
                  className="underline hover:no-underline text-green-700 text-xl"
                >
                  Forgot Password
                </Link>
              </div>
            </Form.Item>
            <Form.Item>
              <Button
                type="default"
                htmlType="submit"
                style={{
                  backgroundColor: "green",
                  color: "white",
                  borderColor: "none",
                }}
                className="bg-green-600  w-full"
                hoverable
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
