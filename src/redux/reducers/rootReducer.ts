import { ADD_ARTICLES, SET_ARTICLES } from "../actionType";

const initState = {
  articles: [],
  articlesTemp: [],
};

export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    case ADD_ARTICLES: {
      const { title, body, newArticleId } = action.payload;
      const tempArticles = [
        ...state.articles,
        {
          title,
          body,
          id: newArticleId,
        },
      ];
      return {
        ...state,
        articles: tempArticles,
      };
    }
    default:
      return state;
  }
};
