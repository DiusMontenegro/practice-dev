import Link from "next/link";
import React from "react";

function page() {
    return (
        <div>
            <h1 className="mb-2">account</h1>

            <div className="space-x-2">
                <Link href="/login">login</Link>
                <Link href="/register">register</Link>
            </div>
        </div>
    );
}

export default page;
