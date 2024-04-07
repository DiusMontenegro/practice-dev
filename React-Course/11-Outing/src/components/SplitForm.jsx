import { useState } from 'react';

const SplitForm = ({ selectedFriend, setSelectedFriend, onSplit }) => {
    const [bill, setBill] = useState('');
    const [myExpense, setMyExpense] = useState('');
    const [payer, setPayer] = useState('you');
    const myFriendExpense = bill ? bill - myExpense : '';

    function handleSubmit(e) {
        e.preventDefault();

        if (!bill || !myExpense) return;

        onSplit(payer === 'you' ? -myFriendExpense : myExpense);
        alert('Payment has been split');
        setSelectedFriend(null);
    }

    return (
        <form className="text-end" onSubmit={handleSubmit}>
            <h2 className="text-center font-semibold text-2xl mb-8">
                SPLIT A PAYMENT WITH {selectedFriend.name.toUpperCase()}
            </h2>
            <div className="grid grid-cols-2 mb-5">
                <div className="text-start">
                    <label>💸 Total Payment</label>
                    <label htmlFor="myExpense">💵 Your Expense</label>
                    <label htmlFor="friendExpense">
                        👯 {selectedFriend.name}&apos;s Expense
                    </label>
                    <label htmlFor="payer">
                        🤑 Who&apos;s Paying the bill?
                    </label>
                </div>
                <div>
                    <input
                        type="number"
                        className="ml-6 mb-2"
                        value={bill}
                        onChange={(e) => setBill(Number(e.target.value))}
                    />
                    <input
                        id="myExpense"
                        type="number"
                        className="ml-6 mb-2"
                        value={myExpense}
                        onChange={(e) =>
                            setMyExpense(
                                Number(e.target.value) > bill
                                    ? myExpense
                                    : Number(e.target.value)
                            )
                        }
                    />
                    <input
                        id="friendExpense"
                        type="text"
                        className="ml-6 mb-2"
                        value={myFriendExpense}
                        disabled
                    />
                    <select
                        className="ml-6 w-[185px] mb-2 rounded-md pl-2 text-[#1c1c1c] cursor-pointer"
                        name=""
                        id="payer"
                        value={payer}
                        onChange={(e) => setPayer(e.target.value)}
                    >
                        <option value="you">You</option>
                        <option value={selectedFriend.name}>
                            {selectedFriend.name}
                        </option>
                    </select>
                </div>
            </div>
            <input
                className="text-white cursor-pointer hover:bg-gray-200 hover:text-[#1c1c1c] border text-center w-[80px]  py-[2px] px-0"
                type="submit"
                value="Split Bill"
            />
        </form>
    );
};

export default SplitForm;
