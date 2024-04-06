const Sidebar = ({ sortBy, handleSort, deleteAll }) => {
    return (
        <aside className="w-[20%] px-2 flex flex-col py-4 border justify-between bg-gray-300 rounded-lg">
            <label className="w-full">
                Sort by:
                <select
                    value={sortBy}
                    onChange={(e) => handleSort(e.target.value)}
                    className="block w-full rounded-l-full text-xs rounded-r-full py-[2px] mt-3 cursor-pointer"
                >
                    <option className="sort" value="input">
                        SORT BY INPUT ORDER
                    </option>
                    <option className="sort" value="description">
                        SORT BY NAME
                    </option>
                    <option className="sort" value="addedStatus">
                        SORT BY ADDED STATUS
                    </option>
                </select>
            </label>
            <button
                onClick={deleteAll}
                className="text-sm font-semibold w-full rounded-l-full rounded-r-full py-[2px] mt-1 border border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-white tracking-widest"
            >
                clear list
            </button>
        </aside>
    );
};

export default Sidebar;
