import { ADD_ARTICALS, SET_ARTICALS } from "../actionType";

export const setArticals = (item) => {
  return {
    type: SET_ARTICALS,
    payload: item,
  };
};

export const addArticals = (title, body) => {
  return {
    type: ADD_ARTICALS,
    title: title,
    body: body,
  };
};
