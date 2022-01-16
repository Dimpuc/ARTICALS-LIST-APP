import React from "react";
import {
  SHeader,
  SHeaderLi,
  SHeaderLink,
  SHeaderTitle,
  SHeaderUl,
} from "./styled";

export function Header() {
  return (
    <SHeader>
      <SHeaderTitle>REACT APP</SHeaderTitle>
      <SHeaderUl>
        <SHeaderLi>
          <SHeaderLink to="/">Home</SHeaderLink>
        </SHeaderLi>
        <SHeaderLi>
          <SHeaderLink to="/users">Users</SHeaderLink>
        </SHeaderLi>
        <SHeaderLi>
          <SHeaderLink to="/photos">Photos</SHeaderLink>
        </SHeaderLi>
      </SHeaderUl>
    </SHeader>
  );
}
