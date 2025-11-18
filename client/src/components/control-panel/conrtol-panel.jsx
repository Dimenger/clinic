import { useContext } from "react";
import { AuthContext } from "../context/auth-context";

import styles from "./control-panel.module.css";

export const ControlPanel = () => {
  const { isAuth, HandleLogout } = useContext(AuthContext);

  return (
    <div className={styles.controlPanel}>
      {isAuth && (
        <button className={styles.controlButton} onClick={HandleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};
