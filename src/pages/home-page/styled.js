import styled from "styled-components";

export const SHomePage = styled.div`
  display: flex;
  justify-content: center;
`;

export const SHomePageContainer = styled.div`
  max-width: 1080px;
`;

export const SHomePageTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`;

export const SHomePageBtnBlock = styled.div``;

export const SHomePageBtn = styled.button`
  height: 35px;
  margin-left: 5px;
  width: 120px;
  font-weight: 550;
  cursor: pointer;
  background-color: #0d86ff;
  color: white;
  border-radius: 5px;
  border: none;
`;

export const SHomeTitle = styled.h3`
  font-size: 30px;
  text-transform: uppercase;
  margin: 0;
`;

export const SHomeArticlesBlock = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;
