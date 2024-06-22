import Link from "next/link";
import React from "react";

function page() {
    return (
        <div>
            <h1 className="mb-2">Checkout</h1>

            <Link href="/order/1">Check Order 1</Link>
        </div>
    );
}

export default page;
