import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";

import styles from "./signinbutton.module.scss";

export function SigninButton() {
  const { data: session } = useSession();

  let button = (
    <button className={styles.signinButton} onClick={() => signOut()}>
      <FaGithub color="#04d361" />
      {session?.user?.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  );

  if (!session) {
    button = (
      <button className={styles.signinButton} onClick={() => signIn("github")}>
        <FaGithub color="#eba417" />
        Sign in with Github
      </button>
    );
  }

  return button;
}
