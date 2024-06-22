import React from "react";
import Link from "next/link";
import { navLinks } from "@/constants/data";

function Navbar() {
    return (
        <div className="mb-10 flex items-center justify-between">
            <Link href="/">QueryAI</Link>

            <ul className="flex items-center gap-2">
                {navLinks.map((item, index) => (
                    <li key={index}>
                        <Link href={`/${item}`}>{item}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;
