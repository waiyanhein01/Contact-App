import React, { useEffect } from "react";
import { ButtonComponent, PreventComponent } from "../components";
import { Outlet, useNavigate } from "react-router-dom";
import { getContactData } from "../service/Contact.service";
import { getProfile } from "../service/Auth.service";

const HomePage = () => {
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    nav("/");
  };

  const handleContactAdd = () => nav("/home/add");

  useEffect(() => {
    (async () => {
      const res = await getProfile() 
    })()
  },[])

  return (
    <PreventComponent check={!localStorage.getItem("auth")} path={"/"}>
      <div className="container mx-auto">
        <nav className=" border shadow flex h-full w-full justify-between items-center p-3">
          <h1 className="">Contact Page</h1>
          <div className=" flex space-x-5">
            <div className=" mt-auto relative group">
              <ButtonComponent onClick={handleContactAdd}>Add</ButtonComponent>
            </div>
            <div className=" mt-auto relative group">
              <ButtonComponent onClick={handleLogout}>LogOut</ButtonComponent>
            </div>
          </div>
        </nav>

        <div className="">
          <Outlet/>
        </div>
      </div>
    </PreventComponent>
  );
};

export default HomePage;
