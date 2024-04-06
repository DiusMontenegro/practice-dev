const Status = ({ items }) => {
    const totalItems = items.length;
    const addedItems = items.filter((item) => item.isAdded).length;
    const percentage = (addedItems / totalItems) * 100;

    const noItems = () => (
        <span>&quot; Start Adding some items to your list 🚀</span>
    );

    const notCompleted = () => (
        <span>
            &quot; You now have {totalItems} items in your list, and you added{' '}
            {addedItems} ({percentage.toFixed(2)}%) of the total items 📃 &quot;
        </span>
    );

    const completed = () => (
        <span>&quot; You have added all the items to your list 💯 &quot;</span>
    );

    return (
        <p className="text-sm italic text-center bg-green-400 py-2 text-blue-950 font-semibold">
            {totalItems === 0
                ? noItems()
                : percentage === 100
                ? completed()
                : notCompleted()}
        </p>
    );
};

export default Status;
