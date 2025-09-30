import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";

import { GetNewsList } from "../../../bff/api";

import styles from "./news.module.css";

export const News = () => {
  const [news, setNews] = useState([]);

  //   const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const loadedNews = await GetNewsList();
      setNews(loadedNews);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.newsContainer}>
      {news.map(({ id, title, content }) => (
        <div key={id}>
          <p>{title}</p>
          <p>{content}</p>
        </div>
      ))}
    </div>
  );
};
