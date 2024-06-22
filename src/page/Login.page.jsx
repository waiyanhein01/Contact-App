import React, { useState } from "react";
import {
  ButtonComponent,
  ContainerComponent,
  FormComponent,
} from "../components";

const LoginPage = () => {
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
      <div className="flex flex-col items-center justify-center w-auto h-full">
        <div className="lg:w-[400px] w-[300px]">
          <h1 className="text-xl font-bold text-center">Login Your Contact</h1>
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
        </div>
      </div>
    </ContainerComponent>
  );
};

export default LoginPage;
