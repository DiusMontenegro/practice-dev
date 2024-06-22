import React from "react";

function page({ searchParams }) {
    return <div>Search result for &quot; {searchParams.q} &quot;</div>;
}

export default page;
