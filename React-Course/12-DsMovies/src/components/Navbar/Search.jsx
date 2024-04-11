import { useEffect, useRef } from 'react';

const Search = ({ query, setQuery }) => {
    const searchEl = useRef(null);

    useEffect(() => {
        function callback(e) {
            if (e.code === 'Enter') {
                if (document.activeElement === searchEl.current) return;

                searchEl.current.focus();
                setQuery('');
            }
        }

        document.addEventListener('keydown', callback);

        return () => document.removeEventListener('keydown', callback);
    }, [setQuery]);

    return (
        <input
            className="h-[35px] w-[300px] text-[14px] text-[#1c1c1c] pl-2 focus:outline-none rounded-md placeholder:text-[#1c1c1c] border shadow-md focus:translate-y-[-2px] trasition-all"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            ref={searchEl}
        />
    );
};

export default Search;
