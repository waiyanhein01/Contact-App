import React from "react";
import { ButtonComponent, PreventComponent } from "../components";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    nav("/");
  };

  return (
    <PreventComponent check={!localStorage.getItem("auth")} path={"/"}>
      <div className=" flex flex-col h-screen p-10">
        <h1 className="">Homepage</h1>
        <p className=" text-center pt-52">"There is no content.Just a test"</p>
        <div className=" mt-auto relative group">
          <ButtonComponent onClick={handleLogout}>LogOut</ButtonComponent>
          <div className="absolute left-0 bottom-full mb-2 hidden p-2 w-auto bg-blue-600 text-white text-sm rounded group-hover:block">
            Are you sure to Logout?
          </div>
        </div>
      </div>
    </PreventComponent>
  );
};

export default HomePage;
