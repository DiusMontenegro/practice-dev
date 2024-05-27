import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
    return (
        <header>
            <Link to="/">Pizza Express</Link>

            <SearchOrder />

            <p>Dre</p>
        </header>
    );
}

export default Header;
