import React from "react";

const ButtonComponents = ({ ...rest }) => {
  return (
    <>
  <button {...rest} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center" />
</>

  );
};

export default ButtonComponents;
