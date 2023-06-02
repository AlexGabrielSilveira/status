import Link from "next/link";
import styles from "./navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <h1>STT4 | <span>Status</span></h1>
            </Link>
            <input type="text" placeholder="Pesquisar ação..."/>
        </nav>
    )
}