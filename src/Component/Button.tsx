import React, { Children } from "react";

const Button = ({ children, className }: any) => {
  return (
    <div>
      <button className={`  ${className}`}>{children}</button>
    </div>
  );
};

export default Button;
