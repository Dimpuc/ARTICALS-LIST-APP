import styled from "styled-components";

export const SCartArticle = styled.div`
  width: 340px;
  height: 250px;
  margin-top: 20px;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  background-color: #b5b5b5;
`;

export const SCartArticleContainer = styled.div`
  max-width: 300px;
  padding-top: 20px;
`;

export const SCartArticleTitle = styled.h3`
  font-weight: bold;
  margin: 0;
  width: 206px;
  font-size: 25px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SCartArticlBody = styled.div`
  font-size: 20px;
  margin-top: 10px;
  width: 270px;
  -webkit-line-clamp: 4;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
