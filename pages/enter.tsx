import React, { useState } from "react";
import ActionButton from "../components/ActionButton";
import styles from "../styles/Enter.module.scss";

export default function Login() {

    const [email, setEmail] = useState("");

    const handleClickSend = () => {
        console.log("invia mail di login ", email);
    }

    const listButton = [
        {
            label: "Send",
            onClick: handleClickSend
        }
    ];

    return (
        <>
            <div className={styles.content}>
                    <img src="Desiderando_logo_black.png" />
                    <div>
                        <p>Type your email and log in with the magic link you’ll recieve!</p>
                        <p className={styles.small_text}>Email</p>
                        <input type="email" value={email} onChange={(e) => {setEmail(e.currentTarget.value)}} />
                        <p>
                            If it is your first time a new user will be created.
                        </p>
                    </div>
            </div>
            <ActionButton listButton={listButton} />
        </>
    )
}
