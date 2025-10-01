import { GetNewsList } from "../../../bff/api";
import { PostNewsList } from "../../../actions/post-news-list";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./news.module.css";

export const News = () => {
  const news = useSelector((state) => state.news.news);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNews = async () => {
      const loadedNewsList = await GetNewsList();
      dispatch(PostNewsList(loadedNewsList));
    };
    fetchNews();
  }, [dispatch]);

  return (
    <div className={styles.newsContainer}>
      {news.map(({ id, title, content, published_at }) => (
        <article key={id} className={styles.article}>
          <div className={styles.title}>
            <h3>{title}</h3>
            <div className={styles.time}>
              <i class="fa fa-calendar-o"></i>
              <time datetime={published_at}>{published_at}</time>
            </div>
          </div>
          <p>{content}</p>
        </article>
      ))}
    </div>
  );
};
