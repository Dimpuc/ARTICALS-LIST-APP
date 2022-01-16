import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsArticles } from "../../components/cards-articles/CardsArticles";
import { ModalWindow } from "../../components/modal-window/ModalWindow";
import { setArticals } from "../../redux/action";
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
  const articles = useSelector((articles) => articles.articles);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(({ data }) => {
      dispatch(setArticals(data));
    });
  }, []);

  return (
    <SHomePage>
      <SHomePageContainer>
        <SHomePageTopBlock>
          <SHomeTitle>Articals List</SHomeTitle>
          <SHomePageBtnBlock>
            <SHomePageBtn>Make big cards</SHomePageBtn>
            <SHomePageBtn onClick={() => setModalActive(true)}>
              Add Articles
            </SHomePageBtn>
          </SHomePageBtnBlock>
        </SHomePageTopBlock>
        <SHomeArticlesBlock>
          {articles &&
            articles.map((article) => (
              <CardsArticles article={article} key={article.id} />
            ))}
        </SHomeArticlesBlock>
      </SHomePageContainer>
      <ModalWindow modalActive={modalActive} setModalActive={setModalActive} />
    </SHomePage>
  );
}
