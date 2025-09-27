import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

import styles from "./layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.body}>
      <ScrollRestoration />
      <div className={styles.body_header}>
        <Header />
      </div>
      <main className={styles.body_main}>
        <Outlet />
      </main>
      <div className={styles.body_footer}>
        <Footer />
      </div>
    </div>
  );
};
