import { ChangeEvent } from "react";
import { ChangeEventHandler, useRef, useState } from "react";
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
                        <div className={`${styles.card} ${styles.card_own}`} key={el.id}>
                            {el.name}
                        </div>
                    )
                )}
                {type === "invite" &&
                    list.map(el => (
                        <div className={`${styles.card} ${styles.card_invite}`} key={el.id}>
                            {el.name}
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default HorizontalList;