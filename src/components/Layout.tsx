import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export function Layout() {
    return(
        <>
            <header className={styles.header}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/albums">Albums</Link>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>2024</footer>
        </>
    )
}