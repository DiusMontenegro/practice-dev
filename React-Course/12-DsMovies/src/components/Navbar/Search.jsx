import { useState } from 'react';

const Search = () => {
    const [query, setQuery] = useState('');

    return (
        <input
            className="h-[35px] w-[300px] text-[14px] text-[#1c1c1c] pl-2 focus:outline-none rounded-md placeholder:text-[#1c1c1c] border shadow-md focus:translate-y-[-2px] trasition-all"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    );
};

export default Search;
