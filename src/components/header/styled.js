import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SHeader = styled.div`
  height: 70px;
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
`;

export const SHeaderTitle = styled.h3`
  margin: 0;
  padding-left: 50px;
  font-size: 22px;
`;

export const SHeaderUl = styled.ul`
  display: flex;
`;

export const SHeaderLi = styled.li`
  list-style: none;
  margin: 0 35px;
`;

export const SHeaderLink = styled(NavLink)`
  cursor: pointer;
  color: white;
  text-decoration: none;
`;
