import { useRouter } from "next/router";
import React from "react";
import ActionButton from "../components/ActionButton";
import styles from "../styles/Login.module.scss";

export default function Login() {

  const r = useRouter();

  const handleClickEnter = () => {
    r.push("/enter");
  }

  const listButton = [
    {
      label: "Enter",
      onClick: handleClickEnter
    }
  ];

  return (
    <>
      <div className={styles.content}>
          <img src="Desiderando_logo_black.png" />
          <div>
            <img src="login_bg.png" />
            <p>No more unwanted gift</p>
          </div>
      </div>
      <ActionButton listButton={listButton} />
    </>
  )
}
