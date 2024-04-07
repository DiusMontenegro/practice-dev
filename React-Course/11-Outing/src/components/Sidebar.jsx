const Sidebar = ({
    onAddFriend,
    friendName,
    handleFriendName,
    image,
    onSetImage,
}) => {
    function handleSubmit(e) {
        e.preventDefault();

        if (!friendName || !image) {
            alert('Please enter a name');
            onSetImage('https://i.pravatar.cc/48');
            return;
        }

        const id = crypto.randomUUID();
        const newFriend = {
            id,
            name: friendName,
            image: `${image}?=${id}`,
            balance: 0,
        };

        onAddFriend(newFriend);

        handleFriendName('');
        onSetImage('https://i.pravatar.cc/48');
    }

    return (
        <form
            className="col-span-3 p-4 text-white text-end"
            onSubmit={handleSubmit}
        >
            <h2 className="text-center mb-4 text-semibold text-xl">
                ADD FRIEND
            </h2>
            <label className="block mb-2 w-full text-start">
                👯 Friend Name{' '}
                <input
                    type="text"
                    minLength="0"
                    maxLength="15"
                    className="text-[#1c1c1c] pl-2 text-sm w-[200px]"
                    value={friendName}
                    onChange={(e) => handleFriendName(e.target.value)}
                />
            </label>
            <label className="w-full block mb-6 text-start">
                📸 Image URL{' '}
                <input
                    type="text"
                    value={image}
                    onChange={(e) => onSetImage(e.target.value)}
                    minLength="15"
                    className="pl-2 text-sm w-[200px]"
                />
            </label>
            <input
                type="submit"
                value="Add"
                className="border text-gray-200 inline-block py-[4px] px-[8px] text-sm font-semibold cursor-pointer rounded-md hover:bg-gray-200 hover:text-[#1c1c1c] w-[50px]"
            />
        </form>
    );
};

export default Sidebar;
