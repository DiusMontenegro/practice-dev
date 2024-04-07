import { useState } from 'react';
import Content from './Content';
import Friend from './Friend';
import Sidebar from './Sidebar';
import testData from '../constants/data';

const Main = () => {
    const [friendName, setFriendName] = useState(null);
    const [friends, setFriends] = useState(testData);
    const [selectedFriend, setSelectedFriend] = useState(null);
    const [image, setImage] = useState('https://i.pravatar.cc/48');

    function addFriend(newFriend) {
        setFriends((friends) => [...friends, newFriend]);
    }

    function handleFriendName(value) {
        setFriendName(value);
    }

    function handleSelectedFriend(friend) {
        setSelectedFriend((selectedFriend) =>
            selectedFriend?.id !== friend.id ? friend : null
        );
    }

    function handleSplitBill(value) {
        setFriends((friends) =>
            friends.map((friend) =>
                friend.id === selectedFriend.id
                    ? { ...friend, balance: friend.balance + value }
                    : friend
            )
        );
    }

    return (
        <main className="container h-[380px] grid grid-flow-col grid-cols-12 bg-black bg-opacity-40  p-0 rounded-lg">
            <Sidebar
                onAddFriend={addFriend}
                friendName={friendName}
                handleFriendName={handleFriendName}
                image={image}
                onSetImage={setImage}
            />
            <Content
                setSelectedFriend={setSelectedFriend}
                selectedFriend={selectedFriend}
                onSplit={handleSplitBill}
            />
            <Friend
                friends={friends}
                selectedFriend={selectedFriend}
                onSelectFriend={handleSelectedFriend}
            />
        </main>
    );
};

export default Main;
