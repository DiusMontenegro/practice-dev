import { useState } from 'react';

const List = ({ place, selectedId, setSelectedId }) => {
    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        setSelectedId(place.id);
        setIsClicked((clicked) => !clicked);
    }

    return (
        <li
            className={`w-[320px] flex cursor-pointer items-center justify-center ${
                selectedId === place.id
                    ? 'bg-gray-400 text-white font-semibold rounded-md'
                    : null
            }`}
            onClick={handleClick}
        >
            {selectedId === place.id && isClicked ? (
                <p>{place.location}</p>
            ) : (
                <img
                    className="rounded-md"
                    src={place.image}
                    alt={place.location}
                />
            )}
        </li>
    );
};

export default List;
