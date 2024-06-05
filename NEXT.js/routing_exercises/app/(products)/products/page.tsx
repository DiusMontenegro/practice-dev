import Link from "next/link";

const product = [
    { name: "headset", items: 4 },
    { name: "phone", items: 20 },
    { name: "speaker", items: 18 },
];

function products() {
    return (
        <div className="h-screen flex items-center justify-center">
            products
            <ul>
                {product.map((item, index) => (
                    <li key={index}>
                        <Link href={`/products/${item.name}`}>
                            {item.name} / {item.items}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default products;
