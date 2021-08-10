import styles from "./Sidebar.module.scss";

const Sidebar = () => {
    return (
        <div className={`${styles.sidebar}`}>
            <div className={styles.logo}>Team Generator</div>
            <ul className={styles.menu}>
                <li>
                    Dashboard
                </li>
                <li>
                    Generate new team
                </li>
                <li>
                    Support us
                </li>
            </ul>
            <div>
                Copy 2021
            </div>
        </div>
    )
}

export default Sidebar;
