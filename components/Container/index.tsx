import styles from "../Container/Container.module.scss";
import Head from "next/head"

const Container = ({ children }: any) => {
    return (
    <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="An application for videogamers"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700;800&display=swap" />
            <title>Desiderando</title>
        </Head>
        <div className={styles.container}>
            <main>{children}</main>
        </div>
    </>
    )
}

export default Container;