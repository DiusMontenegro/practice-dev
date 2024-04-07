const Card = ({ friend, selectedFriend, onSelectFriend }) => {
    const isSelected = selectedFriend?.id === friend.id;

    return (
        <li
            className={`flex gap-3 p-1 cursor-pointer hover:bg-opacity-40 bg-gray-200 rounded-md mb-1 ${
                isSelected ? 'bg-opacity-45' : 'bg-opacity-20'
            }`}
        >
            <img
                src={friend.image}
                alt={friend.name}
                className={`w-[40px] h-[40px] rounded-full border-2 ${
                    friend.balance > 0
                        ? 'border-red-500'
                        : friend.balance < 0
                        ? 'border-green-500'
                        : 'border-blue-500'
                }`}
            />
            <div className="py-[2px] w-[120px]">
                <h4 className="text-xs font-bold">{friend.name}</h4>
                <p
                    className={`text-[0.64rem] ${
                        friend.balance > 0
                            ? 'text-red-500'
                            : friend.balance < 0
                            ? 'text-green-500'
                            : null
                    }`}
                >
                    {friend.balance > 0 ? (
                        <p>
                            You owe {friend.name} ${friend.balance}
                        </p>
                    ) : friend.balance < 0 ? (
                        <p>
                            {friend.name} owe&apos;s you $
                            {Math.abs(friend.balance)}
                        </p>
                    ) : (
                        <p>You and {friend.name} are even.</p>
                    )}
                </p>
            </div>
            <button
                onClick={() => onSelectFriend(friend)}
                className="text-[10px] h-[24px] mt-[10px] text-center inline-block pt-[1px] font-bold border w-[40px] rounded-sm hover:bg-gray-200 hover:text-[#1c1c1c]"
            >
                {isSelected ? 'Close' : 'Select'}
            </button>
        </li>
    );
};

export default Card;
