const Sidebar = () => {
    return (
        <aside className="w-[20%] px-2 flex flex-col py-4 border justify-between bg-gray-300 rounded-lg">
            <label className="w-full">
                Sort by:
                <select
                    name=""
                    className="block w-full rounded-l-full rounded-r-full py-[2px] mt-1 cursor-pointer"
                >
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </label>
            <button className="text-sm font-semibold w-full rounded-l-full rounded-r-full py-[2px] mt-1 border border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-white tracking-widest">
                clear list
            </button>
        </aside>
    );
};

export default Sidebar;
