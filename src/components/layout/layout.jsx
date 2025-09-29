import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

import styles from "./layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.body}>
      <ScrollRestoration />
      <header className={styles.body_header}>
        <Header />
      </header>
      <main className={styles.body_main}>
        <Outlet />
      </main>
      <footer className={styles.body_footer}>
        <Footer />
      </footer>
    </div>
  );
};
