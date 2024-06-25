import React, { useEffect, useState } from "react";
import {
  ButtonComponent,
  ContainerComponent,
  ErrorComponent,
  FormComponent,
  LoadingComponent,
  PreventComponent,
} from "../components";
import { useNavigate } from "react-router-dom";
import useApi from "../hook/useApi";
import { Register } from "../service/Auth.service";

const RegisterPage = () => {
  const nav = useNavigate();
  const { handleDealApi, loading, error, data } = useApi(Register);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });


  useEffect(() => {
    if(data){
      nav("/")
    }
  },[data])

  

  const handleRegisterFormInput = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    handleDealApi(formData)
  };

  // console.log(loading,data,error)

  return (
    <PreventComponent check={localStorage.getItem("auth")} path={"/home"}>
      <ContainerComponent>
      
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="Center">
          <div className="lg:w-[400px] w-[300px]">
            <h1 className="text-xl text-center">Register Your Contact</h1>
            {error && <ErrorComponent>{error}</ErrorComponent>}

            <form onSubmit={handleRegister} className=" mt-5">
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

              <ButtonComponent type="submit">Register</ButtonComponent>
              
            </form>
            <p className=" mt-5">
                You have an account?
                <button
                  onClick={() => nav("/")}
                  className=" text-blue-500 underline"
                >
                  Login
                </button>
              </p>
          </div>
        </div>
      )}
    </ContainerComponent>
    </PreventComponent>
  );
};

export default RegisterPage;
