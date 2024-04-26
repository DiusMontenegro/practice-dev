import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to="/" className="h-[5.2rem] flex items-center gap-2">
            <img src="../logo.svg" alt="wanderlust" className="w-[50px]" />
            <h4 className="text-4xl">WanderLust</h4>
        </Link>
    );
}

export default Logo;
