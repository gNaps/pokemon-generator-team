import { useRouter } from "next/router";
import ActionButton from "../../components/ActionButton";
import Navbar from "../../components/Navbar"
import styles from "../../styles/Desiderio.module.scss";
import { desiderioDetail } from "../../api/fakeApi"

const Desiderio = () => {
    const r = useRouter();
    const { slug } = r.query;

    const handleClickBook = () => {
        console.log("prenoto desiderio");
    }

    const listButton = [
        {
          label: "Book",
          onClick: handleClickBook
        }
    ];
    
    return (
        <>
        <Navbar />
        <div className={styles.content}>
            <div className={styles.bg_desiderio}>
                <h1>What is?</h1>
                <img src="/desiderio.png" />
            </div>
            <div className={styles.card_content}>
                <h3>{desiderioDetail.name}</h3>
                <p>{desiderioDetail.description}</p>
            </div>
            <h1>How much?</h1>
            <div className={styles.card_content}>
                <p>{desiderioDetail.price} €</p>
            </div>
            <h1>Where?</h1>
            <div className={styles.card_content}>
                <p>{desiderioDetail.place}</p>
            </div>
        </div>
        <ActionButton listButton={listButton} />
        </>
    );
}

export default Desiderio;