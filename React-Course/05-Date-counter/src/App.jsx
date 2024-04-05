import { useState } from 'react';

const App = () => {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    const date = new Date('april 4 2024');
    date.setDate(date.getDate() + count);

    return (
        <>
            <div className="text-center mb-2 pt-[50px]">
                <button onClick={() => setStep((step) => step - 1)}>-</button>
                <span className="inline-block w-[100px]">
                    Step: {step > 1 ? step : 1}
                </span>
                <button onClick={() => setStep((step) => step + 1)}>+</button>
            </div>
            <div className="text-center mb-6">
                <button onClick={() => setCount((count) => count - step)}>
                    -
                </button>
                <span className="inline-block w-[100px]">Count: {count}</span>
                <button onClick={() => setCount((count) => count + step)}>
                    +
                </button>
            </div>
            <p className="text-center">
                <span>
                    {count === 0
                        ? `Today is `
                        : count === -1
                        ? `${Math.abs(count)} day ago is `
                        : count < -1
                        ? `${Math.abs(count)} days ago is `
                        : count === 1
                        ? `${count} day from now is `
                        : `${count} days from now is `}
                </span>
                {date.toDateString()}
            </p>
        </>
    );
};

export default App;
