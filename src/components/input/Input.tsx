import React from "react";
import { SInput } from "./styled";

export const Input = ({onChange, placeholder, value, type, name }, props?: any) => {
  return (
    <SInput
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      {...props}
      placeholder={placeholder}
    />
  );
};
