import Link from "next/link";
import React from "react";

function page() {
    return (
        <main>
            <h1 className="mb-2">Cart</h1>

            <div>
                <Link href="checkout">checkout</Link>
            </div>
        </main>
    );
}

export default page;
