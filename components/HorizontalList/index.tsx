import { ChangeEvent, useRef, useState } from "react";
import Link from "next/link";
import { ListaDesideri } from "../../models/ListaDesideri";
import styles from "../HorizontalList/HorizontalList.module.scss";

export interface HorizontalListProps {
    type: string,
    list: Array<ListaDesideri>,
    label: string
}

const HorizontalList = ({type, list, label}: HorizontalListProps) => {
    const filterWrapper = useRef(null);
    const [filter, setFilter] = useState("");

    const handleClickFilter = () => {
        const El: any = filterWrapper.current;
        
        if (El) {
            El.focus();
        }
    }

    const handleChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.currentTarget.value);
    }

    if(filter) {
        list = list.filter(el => el.name.includes(filter));
    }

    return(
        <div className={styles.container}>
            <div className={styles.search}>
                <p>{label}</p>
                <div className={styles.search_input} onClick={handleClickFilter}>
                    <input type="text" placeholder=" " ref={filterWrapper} onChange={(e) => handleChangeFilter(e)}/>
                    <img src={"/search.svg"} />
                </div>    
            </div>
            <div className={styles.header}>
                {type === "own" &&
                    list.map(el => (
                        <Link href={`/lista-desiderio/${el.slug}`}>
                            <a>
                                <div className={`${styles.card} ${styles.card_own}`} key={el.id}>
                                    {el.name}
                                </div>
                            </a>
                        </Link>
                    )
                )}
                {type === "invite" &&
                    list.map(el => (
                        <Link href={`/lista-desiderio/${el.slug}`}>
                            <a>
                                <div className={`${styles.card} ${styles.card_invite}`} key={el.id}>
                                    {el.name}
                                </div>
                            </a>
                        </Link>
                    )
                )}
            </div>
        </div>
    )
}

export default HorizontalList;