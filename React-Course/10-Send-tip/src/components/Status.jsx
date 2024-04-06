import { Button } from '@nextui-org/react';

const Status = ({ bill, myTip, myFriendTip, onReset }) => {
    let myTipValue;
    let myFriendTipValue;

    if (myTip === 'dissatisfied') {
        myTipValue = 0;
    } else if (myTip === 'okay') {
        myTipValue = 0.05;
    } else if (myTip === 'good') {
        myTipValue = 0.1;
    } else {
        myTipValue = 0.2;
    }

    if (myFriendTip === 'dissatisfied') {
        myFriendTipValue = 0;
    } else if (myFriendTip === 'okay') {
        myFriendTipValue = 0.05;
    } else if (myFriendTip === 'good') {
        myFriendTipValue = 0.1;
    } else {
        myFriendTipValue = 0.2;
    }

    const totalTip = (myTipValue + myFriendTipValue) * bill;
    const totalPayment = totalTip + bill;

    return (
        <div className="text-center mt-14">
            <h1 className="my-4 italic text-2xl">
                &quot; You pay ${totalPayment.toFixed(2)} (${bill} + $
                {totalTip.toFixed(2)} tip) &quot;
            </h1>
            <div className="flex gap-4 items-center justify-center">
                <Button
                    size="sm"
                    color="success"
                    className="text-xs font-semibold text-white mb-4"
                    onClick={() => onReset()}
                >
                    Reset
                </Button>
            </div>
        </div>
    );
};

export default Status;
