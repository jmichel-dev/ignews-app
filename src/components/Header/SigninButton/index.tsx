import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./signinbutton.module.scss";

export function SigninButton() {
  const isUserLoggedIn = true;

  let button = (
    <button className={styles.signinButton}>
      <FaGithub color="#04d361" />
      Jean Michel
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  );

  if (!isUserLoggedIn) {
    button = (
      <button className={styles.signinButton}>
        <FaGithub color="#eba417" />
        Sign in with Github
      </button>
    );
  }

  return button;
}
