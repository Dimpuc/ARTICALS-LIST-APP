import React from "react";
import { SInput } from "./styled";

export const Input = ({ props, onChange, placeholder, value }) => {
  return (
    <SInput
      onChange={onChange}
      value={value}
      {...props}
      placeholder={placeholder}
    />
  );
};
