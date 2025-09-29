import { COMMUNICATION } from "../../constants";

import styles from "./social.module.css";

export const Social = () => {
  return (
    <div className={styles.social}>
      {COMMUNICATION.social.map(({ id, vk }) => (
        <div key={id}>{vk}</div>
      ))}
    </div>
  );
};
