import { useState } from 'react';
import { Status, Bill, Mytip, Myfriendtip } from './imports';

const App = () => {
    const [bill, setBill] = useState(0);
    const [myTip, setMyTip] = useState('dissatisfied');
    const [myFriendTip, setMyFriendTip] = useState('dissatisfied');

    function handleInput(value) {
        setBill(value);
    }

    function handleMytip(value) {
        setMyTip(value);
    }

    function handleMyFriendtip(value) {
        setMyFriendTip(value);
    }

    function handleReset() {
        setBill(0);
        setMyTip('dissatisfied');
        setMyFriendTip('dissatisfied');
    }

    return (
        <>
            {bill !== 0 ? (
                <Status
                    bill={bill}
                    myTip={myTip}
                    myFriendTip={myFriendTip}
                    onReset={handleReset}
                />
            ) : null}
            <Bill bill={bill} onPayment={handleInput} />
            <Mytip myTip={myTip} onMyTip={handleMytip} />
            <Myfriendtip
                myFriendTip={myFriendTip}
                onMyFriendTip={handleMyFriendtip}
            />
        </>
    );
};

export default App;
