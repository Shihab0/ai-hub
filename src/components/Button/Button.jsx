/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Button = ({ children }) => {
  return (
    <div className="text-center py-4">
      <button className="btn font-bold btn-info">{children}</button>
    </div>
  );
};

export default Button;
