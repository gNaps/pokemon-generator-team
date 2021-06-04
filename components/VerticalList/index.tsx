import Link from "next/link";
import { Desiderio } from "../../models/Desiderio";
import { getCategoryImage } from "../../utils/utils";
import styles from "../VerticalList/VerticalList.module.scss";

export interface VerticalListProps {
    list: Array<Desiderio>,
    label?: string,
    showFrom: boolean
}

const VerticalList = ({list, label, showFrom}: VerticalListProps) => {
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
                        <Link href={`/desiderio/${el.slug}`}>
                            <a>
                                <div className={styles.card} key={el.id}>
                                    <div className={styles.category}>
                                        <img src={getCategoryImage(el.categoryId)} />
                                    </div>
                                    <div>
                                        <p>{el.name}</p>
                                        { showFrom &&
                                            <p className={styles.text_small}>from {el.listaDesiderio.name}</p>
                                        }
                                    </div>
                                    <div className={styles.price}>
                                        {el.price}
                                    </div>
                                    { el.booked_by &&
                                        <span className={styles.booked} />
                                    }
                                </div>
                            </a>
                        </Link>
                    )
                )}
            </div>
        </div>
    )
}

export default VerticalList;
