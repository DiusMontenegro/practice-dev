const Myfriendtip = ({ myFriendTip, onMyFriendTip }) => {
    return (
        <label className="w-[400px] mx-auto border border-black flex flex-col justify-center p-2 mb-2 rounded-md">
            How did your friend like the service?
            <select
                className="mt-1"
                value={myFriendTip}
                onChange={(e) => onMyFriendTip(e.target.value)}
            >
                <option value="dissatisfied">Dissatisfied ( 0% )</option>
                <option value="okay">It was ok ( 5% )</option>
                <option value="good">It was good ( 10% )</option>
                <option value="amazing">Absolutely amazing! ( 20% )</option>
            </select>
        </label>
    );
};

export default Myfriendtip;
