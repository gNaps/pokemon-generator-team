import { Desiderio } from "../../models/Desiderio";
import { getCategoryImage } from "../../utils/utils";
import styles from "../VerticalList/VerticalList.module.scss";

export interface VerticalListProps {
    list: Array<Desiderio>,
    label: string | undefined
}

const VerticalList = ({list, label}: VerticalListProps) => {
    return(
        <div className={styles.container}>
            { label &&
                <div className={styles.label}>
                    <p>{label}</p>
                </div>
            }
            <div className={styles.header}>
                {
                    list.map(el => (
                        <div className={styles.card} key={el.id}>
                            <div className={styles.category}>
                                <img src={getCategoryImage(el.categoryId)} />
                            </div>
                            <div>
                                <p>{el.name}</p>
                                <p className={styles.text_small}>from {el.listaDesiderio.name}</p>
                            </div>
                            <div className={styles.price}>
                                {el.price}
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default VerticalList;
