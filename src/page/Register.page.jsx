import React, { useState } from "react";
import {
  ButtonComponent,
  ContainerComponent,
  FormComponent,
} from "../components";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const handleRegisterFormInput = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <ContainerComponent>
      <div className="flex flex-col items-center justify-center w-auto h-full">
        <div className="lg:w-[400px] w-[300px]">
          <h1 className="text-xl font-bold text-center">Login Your Contact</h1>
          <form onSubmit={handleRegisterSubmit} className=" mt-5">
            <FormComponent
              value={formData.name}
              onChange={handleRegisterFormInput}
              name={"name"}
              label={"Username"}
              type={"text"}
              placeholder={"eng.mg mg"}
            />

            <FormComponent
              value={formData.email}
              onChange={handleRegisterFormInput}
              name={"email"}
              label={"Email"}
              type={"email"}
              placeholder={"example@gmail.com"}
            />

            <FormComponent
              value={formData.password}
              onChange={handleRegisterFormInput}
              name={"password"}
              label={"Enter Your Password"}
              type={"password"}
              placeholder={"password"}
            />

            <FormComponent
              value={formData.password_confirmation}
              onChange={handleRegisterFormInput}
              name={"password_confirmation"}
              label={"Confirm Password"}
              type={"password"}
              placeholder={"confirm password"}
            />

            <ButtonComponent type="Submit">Register</ButtonComponent>
          </form>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default RegisterPage;
