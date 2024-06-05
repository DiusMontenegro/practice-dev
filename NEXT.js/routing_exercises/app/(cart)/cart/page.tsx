import Link from "next/link";
import React from "react";

function cart() {
    return (
        <div>
            cart
            <p>
                Proceed to <Link href="/checkout">checkout</Link>
            </p>
            <div>
                <h1>Orders:</h1>
                <Link href={`/order/1`}>headset</Link>
            </div>
        </div>
    );
}

export default cart;
