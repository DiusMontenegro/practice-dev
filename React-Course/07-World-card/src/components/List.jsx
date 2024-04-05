const List = ({ place, selectedId, setSelectedId }) => {
    function handleClick() {
        setSelectedId(place.id !== selectedId ? place.id : null);
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
            {selectedId === place.id ? (
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
