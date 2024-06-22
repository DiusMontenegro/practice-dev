import React from "react";

function page({ params }) {
    return <div>Order {params.orderId}</div>;
}

export default page;
