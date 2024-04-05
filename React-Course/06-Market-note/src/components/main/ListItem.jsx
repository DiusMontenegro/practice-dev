import { useState } from 'react';

const ListItem = ({ item }) => {
    const [isAdded, setIsAdded] = useState(false);

    function handleAdded() {
        setIsAdded((added) => !added);
    }

    return (
        <li className="border-sky-blue text-sky-blue cursor-pointer border inline-block align-top rounded-md py-[2px] px-[4px] mr-4">
            <label
                className={`mr-1 inline-block cursor-pointer ${
                    isAdded ? 'line-through' : null
                }`}
            >
                <input
                    type="checkbox"
                    onClick={handleAdded}
                    className="mr-2 cursor-pointer"
                />
                {item.quantity} {item.description}
            </label>
            <button className="text-lg text-red-500 rounded-full w-[20px] h-[20px] my-auto">
                &times;
            </button>
        </li>
    );
};

export default ListItem;
