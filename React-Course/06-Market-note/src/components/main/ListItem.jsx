const ListItem = ({ item, deleteItem, selectItem }) => {
    return (
        <li className="border-sky-blue text-sky-blue cursor-pointer border inline-block align-top rounded-md py-[2px] px-[4px] mr-4 mb-2">
            <label
                className={`mr-1 inline-block cursor-pointer ${
                    item.isAdded ? 'line-through' : null
                }`}
            >
                <input
                    type="checkbox"
                    className={`mr-2 cursor-pointer`}
                    checked={item.isAdded}
                    onClick={() => selectItem(item.id)}
                />
                {item.quantity} {item.description}
            </label>
            <button
                onClick={() => deleteItem(item.id)}
                className="text-lg text-red-500 rounded-full w-[20px] h-[20px] my-auto"
            >
                &times;
            </button>
        </li>
    );
};

export default ListItem;
