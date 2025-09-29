import { Link } from "react-router-dom";

import { Addresses } from "../../elements/addresses/addresses";
import { Phones } from "../../elements/phones/phones";
import { Social } from "../../elements/social/social";
import { Button } from "../../elements/button/button";

import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.topRow}>
        <div className={styles.column}>
          <Link to="/Registration">
            <Button>Пробное занятие</Button>
          </Link>
        </div>
        <div className={styles.column}>
          <Social />
        </div>
        <div className={styles.column}>
          <Phones />
        </div>
        <div className={styles.column}>
          <Addresses />
        </div>
      </div>
    </footer>
  );
};
