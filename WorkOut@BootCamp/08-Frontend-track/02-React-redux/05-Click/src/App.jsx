import { useState } from 'react';
import { Button } from '@nextui-org/button';

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="text-center h-[80vh]">
            <h1 className="mb-[20px] text-[30px] text-white bg-black w-[380px] bg-opacity-50 p-2 rounded-md mx-auto">
                Total number of clicks: {count}
            </h1>
            <Button
                radius="full"
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg font-bold"
                onClick={() => setCount(count + 1)}
            >
                Click Me
            </Button>
        </div>
    );
};

export default App;
