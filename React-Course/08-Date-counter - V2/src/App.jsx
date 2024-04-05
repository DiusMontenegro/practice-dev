import { useState } from 'react';

const App = () => {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    const date = new Date('april 4 2024');
    date.setDate(date.getDate() + count);

    function handleReset() {
        setCount(0);
        setStep(1);
    }

    return (
        <>
            <div className="text-center mx-auto">
                <label className="inline-block">
                    {step}
                    <input
                        onChange={(e) => setStep(parseInt(e.target.value))}
                        className="block"
                        value={step}
                        type="range"
                        min={1}
                        max={10}
                    />
                </label>
            </div>
            <div className="text-center mb-6">
                <button onClick={() => setCount((count) => count - step)}>
                    -
                </button>
                <input
                    className="pl-2 inline-block align-middle w-[100px]"
                    type="text"
                    value={count}
                    onChange={(e) => setCount(parseInt(e.target.value))}
                />
                <button onClick={() => setCount((count) => count + step)}>
                    +
                </button>
            </div>
            <p className="text-center mb-4">
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
            {count !== 0 || step !== 1 ? (
                <button
                    onClick={handleReset}
                    className="w-auto py-1 px-4 text-xs mx-auto block"
                >
                    Reset
                </button>
            ) : null}
        </>
    );
};

export default App;
