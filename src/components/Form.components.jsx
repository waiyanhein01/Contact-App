import React from "react";

const FormComponents = ({ type, name, label, placeholder = "", ...rest }) => {
  return (
    <div className="mb-5">
      <label
        name={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        {...rest}
        name={name}
        type={type}
        className="bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none block w-full p-2.5 "
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormComponents;
