import { PostNewsList } from "../actions/post-news-list";
import { GetNewsList } from "../bff/api";

export const fetchNews = () => async (dispatch) => {
  const news = await GetNewsList();
  dispatch(PostNewsList(news));
};
