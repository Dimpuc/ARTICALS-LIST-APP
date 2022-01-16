import React from "react";
import {
  SCartArticlBody,
  SCartArticle,
  SCartArticleContainer,
  SCartArticleTitle,
} from "./styled";

export const CardsArticles = ({ article }) => {
  return (
    <SCartArticle>
      <SCartArticleContainer>
        <SCartArticleTitle>{article.title}</SCartArticleTitle>
        <SCartArticlBody>{article.body}</SCartArticlBody>
      </SCartArticleContainer>
    </SCartArticle>
  );
};
