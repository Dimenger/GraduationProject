import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchNews } from "../../../thunk-action/fetch-news";

import styles from "./news.module.css";

export const News = () => {
  const news = useSelector((state) => state.news.news);
  const dispatch = useDispatch();

  const [sortedNews, setSortedNews] = useState(news);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  useEffect(() => {
    setSortedNews(news);
  }, [news]);

  const sortNewsDate = () => {
    if (!isSorted) {
      const newSort = sortedNews
        .slice()
        .sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
      setSortedNews(newSort);
      setIsSorted(true);
    } else {
      setSortedNews(news);
      setIsSorted(false);
    }
  };

  return (
    <div className={styles.newsContainer}>
      <button onClick={sortNewsDate}>
        <i className="fa fa-sort fa-2x" aria-hidden="true">
          Сортировка по дате
        </i>
      </button>
      {sortedNews.map(({ id, title, content, published_at }) => (
        <article key={id} className={styles.article}>
          <div className={styles.title}>
            <h3>{title}</h3>
            <div className={styles.time}>
              <i className="fa fa-calendar-o"></i>
              <time dateTime={published_at}>{published_at}</time>
            </div>
          </div>
          <p>{content}</p>
        </article>
      ))}
    </div>
  );
};
