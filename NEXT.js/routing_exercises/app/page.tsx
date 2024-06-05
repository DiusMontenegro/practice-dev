import Link from "next/link";

export default function page() {
    const searchQuery = "headset";
    return (
        <div className="h-screen flex items-center justify-center">
            Home
            <div>
                {" "}
                <Link href={`/search?q=${searchQuery}`}>Search idol</Link>
            </div>
        </div>
    );
}
