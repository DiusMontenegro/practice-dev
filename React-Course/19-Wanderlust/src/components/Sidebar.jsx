import { Outlet } from 'react-router-dom';
import AppNav from './AppNav';
import Footer from './Footer';
import Logo from './Logo';
import styles from './Sidebar.module.css';

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <Logo />
            <AppNav />

            <Outlet />

            <Footer />
        </aside>
    );
}

export default Sidebar;
