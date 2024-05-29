import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
    return (
        <header className="flex items-center justify-between bg-accent px-4 py-3 sm:px-6">
            <Link to="/" className="font-light uppercase tracking-widest">
                Pizza Express
            </Link>

            <SearchOrder />

            <p className="hidden font-bold md:block">Dre</p>
        </header>
    );
}

export default Header;
