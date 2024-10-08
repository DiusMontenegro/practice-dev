import { Brand, Search } from '../../imports';

const Navbar = ({ children, query, setQuery }) => {
    return (
        <nav className="items-center flex justify-between h-[50px] px-2 w-[960px] mx-auto rounded-lg bg-yellow-500 text-[#1c1c1c] pt-0">
            <Brand />
            <Search query={query} setQuery={setQuery} />
            {children}
        </nav>
    );
};

export default Navbar;
