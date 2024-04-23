import React, { useState } from "react";
import { Input, Form, Button, Checkbox } from "antd";
import {
  MailFilled,
  LockFilled,
  EyeFilled,
  EyeInvisibleFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
                Password reset
            </h1>
            <p className="text-[#707070EF] mb-[18px] text-xl">
            Enter your email address and we'll send you a link to reset your password
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

            <Form.Item>
              <Button
                type="default"
                htmlType="submit"
                style={{ backgroundColor: 'green',color:"white", borderColor:"none" }}
                className="bg-green-600  w-full"
                hoverable
              >
                Send email
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
