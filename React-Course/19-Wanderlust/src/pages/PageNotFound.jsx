import { Link } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <div className="bg-black text-[#f2f2f2] flex flex-col gap-4 h-screen justify-center items-center">
            <h1 className="text-4xl">Page not found :(</h1>
            <Link to="/" className="text-lg">
                Back to home
            </Link>
        </div>
    );
}
