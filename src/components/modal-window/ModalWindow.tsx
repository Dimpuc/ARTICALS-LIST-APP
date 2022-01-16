import { createArticle } from "Api/articles";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addArticles } from "redux/action";

import { Input } from "../input/Input";

import {
  SModalBtn,
  SModalWindow,
  SModalWindowFon,
  SModalWindowTitle,
} from "./styled";

export const ModalWindow = ({ modalActive, handleShowModal, newArticleId }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const isActiveBtn: boolean =
    title.trim().split("").length > 0 && body.trim().split("").length > 0;
  const [activeBtn, setActiveBtn] = useState<boolean>(isActiveBtn);

  useEffect(() => {
    const body = document.body;
    body.style.overflow = modalActive ? "hidden" : "auto";
  }, [modalActive]);

  useEffect(() => {
    setActiveBtn(isActiveBtn);
  }, [isActiveBtn]);

  const handleChangeTitle = ({ target: { value } }) => {
    setTitle(value);
  };

  const handleChangeBody = ({ target: { value } }) => {
    setBody(value);
  };

  const handelClick = (e) => {
    if (activeBtn) {
      createArticle(body, title, 1);
      dispatch(addArticles(body, title, newArticleId));
    }
    handleShowModal();
    e.preventDefault();
    setTitle("");
    setBody("");
  };

  const handelAlert = () => {
    alert("Please fill in the field!");
  };

  const handleStopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <SModalWindowFon
      vue={modalActive ? 1 : 0}
      pointer={modalActive ? "all" : "none"}
      onClick={handleShowModal}
    >
      <SModalWindow
        trans={modalActive ? 1 : 0.5}
        onClick={handleStopPropagation}
      >
        <SModalWindowTitle>ADD ARTICLE</SModalWindowTitle>
        <Input
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={handleChangeTitle}
        />
        <Input
          type="text"
          name="body"
          value={body}
          placeholder="Body"
          onChange={handleChangeBody}
        />
        <SModalBtn onClick={activeBtn ? handelClick : handelAlert}>
          Create
        </SModalBtn>
      </SModalWindow>
    </SModalWindowFon>
  );
};
