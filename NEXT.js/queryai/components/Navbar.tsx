import React from "react";
import Link from "next/link";
import { navLinks } from "@/constants/data";
import { UserButton } from "@clerk/nextjs";

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
                <li>
                    <UserButton />
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
