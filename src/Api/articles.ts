import axios from "axios";

export const getArticles = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

export const createArticle = (title: string, body: string, userId: number) => {
  return axios.post("https://jsonplaceholder.typicode.com/posts", {
    title,
    body,
    userId,
  });
};
