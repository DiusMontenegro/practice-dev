import { useState } from 'react';

const Form = ({ addItem }) => {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        if (!description) {
            alert('Item name should not be empty');
            return;
        }

        const newItem = {
            id: Date.now(),
            description,
            quantity,
            isAdded: false,
        };

        addItem(newItem);

        setDescription('');
        setQuantity(1);
    }

    return (
        <form
            className="w-[960px] flex gap-3 justify-center mb-3 mx-auto"
            onSubmit={handleSubmit}
        >
            <h2>What items will you buy from the market 🛒 ?</h2>
            <select
                className="pl-2 rounded-l-full rounded-r-full py-[2px] cursor-pointer w-[60px]"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                className="pl-2 rounded-l-full rounded-r-full py-[2px]"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Item"
            />
            <input
                type="submit"
                value="ADD"
                className="px-[10px] text-center text-sm font-semibold rounded-l-full rounded-r-full py-[2px] cursor-pointer bg-sky-blue text-white hover:bg-opacity-90"
            />
        </form>
    );
};

export default Form;
