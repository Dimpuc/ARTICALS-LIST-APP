import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addArticals } from "../../redux/action";
import { Input } from "../input/Input";
import {
  SModalBtn,
  SModalWindow,
  SModalWindowFon,
  SModalWindowTitle,
} from "./styled";

export const ModalWindow = ({ modalActive, setModalActive }) => {
  const [activeBtn, setActiveBtn] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const body = document.body;
    body.style.overflow = modalActive ? "hidden" : "auto";
  }, [modalActive]);

  useEffect(() => {
    if (title.split("").length > 0 && body.split("").length > 0) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  }, [title, body]);

  const handelCangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handelCangeBody = (e) => {
    setBody(e.target.value);
  };

  const handelClick = (e) => {
    // setArtical({ body: body, title: title });
    if (activeBtn) {
      dispatch(addArticals(body, title));
    }
    setModalActive(false);
    e.preventDefault();
    setTitle("");
    setBody("");
  };

  const handelAlert = () => {
    alert("Please fill in the field!");
  };

  return (
    <SModalWindowFon
      vue={modalActive ? 1 : 0}
      pointer={modalActive ? "all" : "none"}
      onClick={() => setModalActive(false)}
    >
      <SModalWindow
        trans={modalActive ? 1 : 0.5}
        onClick={(e) => e.stopPropagation()}
      >
        <SModalWindowTitle>ADD ARTICLE</SModalWindowTitle>

        <Input
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={(e) => handelCangeTitle(e)}
        />
        <Input
          type="text"
          name="body"
          value={body}
          placeholder="Body"
          onChange={(e) => handelCangeBody(e)}
        />
        {activeBtn ? (
          <SModalBtn onClick={handelClick}>Create</SModalBtn>
        ) : (
          <SModalBtn onClick={handelAlert}>Create</SModalBtn>
        )}
      </SModalWindow>
    </SModalWindowFon>
  );
};
