import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (!query) return;

        navigate(`/order/${query}`);

        setQuery('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="🔎 order #"
                type="text"
                className="input input-sm input-bordered input-accent w-28 transition-all duration-300 placeholder:text-center placeholder:text-stone-600 sm:w-64 sm:focus:w-72"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    );
}

export default SearchOrder;
