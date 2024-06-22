import React from "react";

function page({ params }: any) {
    return <div>Product: &quot;{params.productId}&quot;</div>;
}

export default page;
