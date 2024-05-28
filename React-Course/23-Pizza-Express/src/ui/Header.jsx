import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
    return (
        <header className="bg-accent px-4 py-3">
            <Link to="/" className="font-semibold uppercase tracking-widest">
                Pizza Express
            </Link>

            <SearchOrder />

            <p className="hidden">Dre</p>
        </header>
    );
}

export default Header;
