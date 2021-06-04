import { useRef, useState } from "react";
import Link from "next/link";
import styles from "../Navbar/Navbar.module.scss";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const wrapperRef = useRef(null);

    const handleClickMenu = () => {
        setTimeout(() => setShowMenu(!showMenu), 100);
        const menuEl: any= wrapperRef.current;
        if(menuEl) {
            menuEl.classList.toggle(styles.menu_container_open);
        }
    }
    
    return (
        <>
        <div className={styles.navbar_container}>
            <Link href="/">
                <a>
                    <img src="/Desiderando_logo_black.png" className={styles.img_reducer} />
                </a>
            </Link>
            <div className={styles.ham_menu_icon} onClick={handleClickMenu}>
                <input className={styles.ham_menu_icon_checkbox} type="checkbox" />
                <div>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>

        <div className={styles.menu_container} ref={wrapperRef}>
            <ul className={showMenu ? `${styles.ul_menu_open}` : ``}>
                <li>Account</li>
                <li>Settings</li>
                <li>About</li>
                <li>Logout</li>
            </ul>
        </div>
        </>
    )
}

export default Navbar;