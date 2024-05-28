import { Link } from 'react-router-dom';

function CartOverview() {
    return (
        <div className="bg-stone-300 p-4 font-semibold">
            <p className="mb-1 space-x-4">
                <span>23 pizzas</span>
                <span>$23.45</span>
            </p>
            <Link
                to="/cart"
                className="btn btn-sm cursor-pointer border-0 bg-accent shadow-md outline-0 hover:bg-accent hover:bg-opacity-80"
            >
                Open cart &rarr;
            </Link>
        </div>
    );
}

export default CartOverview;
