import { ADD_ARTICALS, SET_ARTICALS } from "../actionType";

const initState = {
  articles: [],
  articlesTemp: [],
  temp: {
    title: "",
    body: "",
    id: 120,
  },
};

export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ARTICALS:
      return {
        ...state,
        articles: action.payload,
      };
    case ADD_ARTICALS: {
      const tempArticles = { ...state.temp };
      tempArticles.title = action.title;
      tempArticles.body = action.body;
      state.temp.id = state.temp.id + 1;
      const tempArticle = [...state.articles, tempArticles];
      state.temp.title = "";
      state.temp.body = "";
      return {
        ...state,
        articles: tempArticle,
      };
    }
    default:
      return state;
  }
};
