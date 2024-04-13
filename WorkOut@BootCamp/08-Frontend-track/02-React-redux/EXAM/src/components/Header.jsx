function Header({ children }) {
    return (
        <header className="pt-2 mb-[30px]">
            <h1 className="text-center text-3xl font-semibold mb-[15px]">
                Task Logger
            </h1>
            {children}
        </header>
    );
}

export default Header;
