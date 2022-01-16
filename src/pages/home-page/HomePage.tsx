import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CardsArticles } from "components/cards-articles/CardsArticles";
import { ModalWindow } from "components/modal-window/ModalWindow";

import { AppState } from "redux/store";
import { setArticles } from "redux/action";
import { getArticles } from "Api/articles";

import {
  SHomeArticlesBlock,
  SHomePage,
  SHomePageBtn,
  SHomePageBtnBlock,
  SHomePageContainer,
  SHomePageTopBlock,
  SHomeTitle,
} from "./styled";

export function HomePage() {
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  const articles = useSelector((state: AppState) => state.articles);

  const handleShowModal = () => {
    setModalActive(!modalActive);
  };

  useEffect(() => {
    getArticles().then(({ data }) => {
      dispatch(setArticles(data));
    });
  }, []);

  return (
    <SHomePage>
      <SHomePageContainer>
        <SHomePageTopBlock>
          <SHomeTitle>Articles List</SHomeTitle>
          <SHomePageBtnBlock>
            <SHomePageBtn>Make big cards</SHomePageBtn>
            <SHomePageBtn onClick={handleShowModal}>Add Articles</SHomePageBtn>
          </SHomePageBtnBlock>
        </SHomePageTopBlock>
        <SHomeArticlesBlock>
          {articles &&
            articles.map((article) => (
              <CardsArticles article={article} key={article.id} />
            ))}
        </SHomeArticlesBlock>
      </SHomePageContainer>
      <ModalWindow
        modalActive={modalActive}
        handleShowModal={handleShowModal}
        newArticleId={articles.length}
      />
    </SHomePage>
  );
}
