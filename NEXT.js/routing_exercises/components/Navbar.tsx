import Link from "next/link";

export default function Navbar() {
    return (
        <header>
            <nav className="flex justify-between items-center px-4 py-2">
                <div>
                    <Link href="/">Home</Link>
                </div>
                <div className="space-x-2">
                    <Link href="/products">Products</Link>
                    <Link href="/cart">Cart</Link>
                    <Link href="/account">Account</Link>
                </div>
            </nav>
        </header>
    );
}
