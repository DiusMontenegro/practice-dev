import React from "react";
import { products } from "@/constants/data";
import Link from "next/link";

function page() {
    return (
        <main>
            <h1 className="mb-2">Products</h1>

            <ul>
                {products.map((item, index) => (
                    <li key={index}>
                        <Link href={`/products/${item}`}>{item}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default page;
