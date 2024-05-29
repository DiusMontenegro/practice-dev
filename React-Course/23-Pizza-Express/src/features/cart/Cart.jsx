import { Link } from 'react-router-dom';

const fakeCart = [
    {
        pizzaId: 12,
        name: 'Mediterranean',
        quantity: 2,
        unitPrice: 16,
        totalPrice: 32,
    },
    {
        pizzaId: 6,
        name: 'Vegetale',
        quantity: 1,
        unitPrice: 13,
        totalPrice: 13,
    },
    {
        pizzaId: 11,
        name: 'Spinach and Mushroom',
        quantity: 1,
        unitPrice: 15,
        totalPrice: 15,
    },
];

function Cart() {
    const cart = fakeCart;

    return (
        <div>
            <Link to="/menu" className="link link-info no-underline">
                &larr; Back to menu
            </Link>

            <h2>Your cart, %NAME%</h2>

            <div className="space-x-2">
                <Link to="/order/new" className="btn btn-accent btn-sm">
                    Order pizzas
                </Link>
                <button className="btn btn-error btn-sm">Clear cart</button>
            </div>
        </div>
    );
}

export default Cart;
