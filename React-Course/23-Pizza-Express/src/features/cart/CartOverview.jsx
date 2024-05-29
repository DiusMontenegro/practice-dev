import { Link } from 'react-router-dom';

function CartOverview() {
    return (
        <div className="flex items-center justify-between bg-stone-300 px-4 py-4 text-sm font-semibold uppercase sm:px-6 md:text-base">
            <p className="mb-1 space-x-4 sm:space-x-6">
                <span>23 pizzas</span>
                <span>$23.45</span>
            </p>
            <Link
                to="/cart"
                className="btn btn-accent btn-xs cursor-pointer border-0 shadow-md md:btn-sm"
            >
                Open cart &rarr;
            </Link>
        </div>
    );
}

export default CartOverview;
