import { useState, useEffect } from 'react';
import Message from './Message';

const App = () => {
    const [advice, setAdvice] = useState('');
    const [count, setCount] = useState(0);

    async function getAdvice() {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        if (data) {
            setAdvice(data.slip.advice);
            setCount((count) => count + 1);
        }
    }

    useEffect(() => {
        getAdvice();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-[30px] mb-2 w-[500px] text-center">
                {advice}
            </h1>
            <button
                className="border border-black px-4 py-2 rounded-md mb-2"
                onClick={getAdvice}
            >
                Get Advice
            </button>
            <Message count={count} />
        </div>
    );
};

export default App;
