import { ADD_ARTICLES, SET_ARTICLES } from "../actionType";

export const setArticles = (item) => {
  return {
    type: SET_ARTICLES,
    payload: item,
  };
};

export const addArticles = (title, body, newArticleId) => {
  return {
    type: ADD_ARTICLES,
    payload: {
      title,
      body,
      newArticleId,
    }
  };
};
