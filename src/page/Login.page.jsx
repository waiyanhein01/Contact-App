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
import { Login } from "../service/Auth.service";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../store/store";
import { LoginAction } from "../store/action/auth.action";

const LoginPage = () => {
  const nav = useNavigate();
  const {loading,error,data,auth} = useSelector(store => store.auth)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleLoginFormInput = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if(data){
      nav("/home")
    }
  },[data])

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    LoginAction(dispatch, formData)
  };
  return (
    <PreventComponent check={localStorage.getItem("auth")} path={"/home"}>
      <ContainerComponent>
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className=" Center">
          <div className="lg:w-[400px] w-[300px]">
            <h1 className="text-xl text-center">Login Your Contact</h1>
            <form onSubmit={handleLoginSubmit} className=" mt-5">
            {error && <ErrorComponent>{error}</ErrorComponent>}

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

              <ButtonComponent type="submit">Login</ButtonComponent>
            </form>
            <p className=" mt-5">
              Don't have an account?
              <button
                onClick={() => nav("/register")}
                className=" text-blue-500 underline"
              >
                Register
              </button>
            </p>
          </div>
        </div>
      )}
    </ContainerComponent>
    </PreventComponent>
  );
};

export default LoginPage;
