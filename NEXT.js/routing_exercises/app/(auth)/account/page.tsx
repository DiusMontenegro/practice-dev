import Link from "next/link";
import React from "react";

function account() {
    return (
        <div className="flex items-center flex-col justify-center">
            account
            <Link href="/register">Register Now</Link>
            <Link href="/login">Login</Link>
        </div>
    );
}

export default account;
