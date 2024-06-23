import React, { useState } from "react";
import {
  ButtonComponent,
  ContainerComponent,
  FormComponent,
} from "../components";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const nav = useNavigate()
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleLoginFormInput = (e) => {
      setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }))
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <ContainerComponent>
      <div className=" Center">
        <div className="lg:w-[400px] w-[300px]">
          <h1 className="text-xl text-center">Login Your Contact</h1>
          <form onSubmit={handleLoginSubmit} className=" mt-5">
            <FormComponent
              value={formData.email}
              onChange={handleLoginFormInput}
              name={"email"}
              label={"Enter Your Email"}
              type={"email"}
              placeholder={"Example@gmail.com"}
            />

            <FormComponent
              value={formData.password}
              onChange={handleLoginFormInput}
              name={"password"}
              label={"Password"}
              type={"password"}
            />

            <ButtonComponent type="Submit">Login</ButtonComponent>

            
          </form>
          <p className=" mt-5">
            Don't have an account?<button onClick={() =>  nav("/register")} className=" text-blue-500 underline">Register</button>
            </p>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default LoginPage;
