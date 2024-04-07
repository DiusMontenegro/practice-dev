import Card from './Card';

const Friend = ({ selectedFriend, onSelectFriend, friends }) => {
    return (
        <div className="col-span-3 py-4 px-2 text-gray-200">
            <h3 className="font-semibold text-xl mb-3">Friends List</h3>
            <ul className="flex flex-col overflow-y-auto h-[300px]">
                {friends.map((friend) => (
                    <Card
                        onSelectFriend={onSelectFriend}
                        key={friend.id}
                        friend={friend}
                        selectedFriend={selectedFriend}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Friend;
