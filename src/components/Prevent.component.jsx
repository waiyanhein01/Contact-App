import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PreventComponent = ({ path, check, children }) => {
  const nav = useNavigate();
useEffect(() => {
    if(check){nav(path)}
 
},[])
  return (

    <div>
      {children}
    </div>
  );
};

export default PreventComponent;
