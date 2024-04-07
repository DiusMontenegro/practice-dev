const Bill = ({ bill, onPayment }) => {
    return (
        <label
            className={`w-[400px] mt-2 mx-auto border border-black flex flex-col justify-center p-2 mb-2 rounded-md ${
                bill === 0 ? 'mt-[50px]' : null
            }`}
        >
            How much was the bill?
            <input
                type="number"
                className="border border-black mt-1 pl-2"
                value={bill}
                onChange={(e) => onPayment(Number(e.target.value))}
            />
        </label>
    );
};

export default Bill;
