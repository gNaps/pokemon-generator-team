import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { listaDesiderioDetail } from "../../api/fakeApi";
import ActionButton from "../../components/ActionButton";
import DesiderioForm from "../../components/DesiderioForm";
import Navbar from "../../components/Navbar";
import VerticalList from "../../components/VerticalList";
import styles from "../../styles/ListaDesiderio.module.scss";

const ListaDesiderio = () => {
    const r = useRouter();
    const { slug } = r.query;
    const [showMenu, setShowMenu] = useState(false);
    const [filterAvailable, setFilterAvailable] = useState(false);
    const [formDesiderio, setFormDesiderio] = useState(false);

    const handleClickNewDesiderio = () => {
        setFormDesiderio(true);
    }

    const listButton = [
        {
          label: "New desiderio",
          onClick: handleClickNewDesiderio
        }
    ];

    const handleChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
        setFilterAvailable(e.currentTarget.checked)
        console.log(e.currentTarget.checked)
    }

    let desideri = []
    if (filterAvailable) {
        desideri = listaDesiderioDetail.desideri.filter(el => !el.booked_by)
    } else {
        desideri = listaDesiderioDetail.desideri;
    }

    return (
        <>
        <Navbar />
        { !formDesiderio &&
            <>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.first_row}>
                        <h1>{listaDesiderioDetail.name}</h1>
                        <img src="/menu2.png" onClick={() => setShowMenu(!showMenu)} />
                    </div>
                    { showMenu &&
                        <div className={styles.menu_container}>
                            <ul>
                                <li>Edit</li>
                                <li>Share</li>
                                <li>Delete</li>
                                <li>Export</li>
                            </ul>
                        </div>
                    }
                    <div className={styles.second_row}>
                        <p>
                            created by {listaDesiderioDetail.owner.username} on {listaDesiderioDetail.created_at}
                        </p>
                        { !listaDesiderioDetail.keep_surprise &&
                            <span className={styles.no_surprise}>No surprise</span>
                        }
                        { listaDesiderioDetail.keep_surprise &&
                            <span className={styles.keep_surprise}>With surprise</span>
                        }
                    </div>
                    <div className={styles.bg_header}>
                        <img src="/listadesiderio-header.png" />
                    </div>
                    <h3>Description</h3>
                    <p>{listaDesiderioDetail.description}</p>
                </div>
                <div className={styles.filter_row}>
                    <input 
                        type="checkbox"
                        onChange={(e) => handleChangeFilter(e)}
                    />
                    <p>
                        Only available
                    </p>
                </div>
                <VerticalList list={desideri} showFrom={false} />
            </div>
            <ActionButton listButton={listButton} />
            </>
        }
        { formDesiderio &&
            <>
            <DesiderioForm setFormDesiderio={setFormDesiderio} />
            </>
        }
        </>
    );
}

export default ListaDesiderio;