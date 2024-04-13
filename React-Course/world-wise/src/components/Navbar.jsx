import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/products">Products</NavLink>
            </li>
            <li>
                <NavLink to="/pricing">pricing</NavLink>
            </li>
        </ul>
    );
}

export default Navbar;
