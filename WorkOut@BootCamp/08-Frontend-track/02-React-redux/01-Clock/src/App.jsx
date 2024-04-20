import { useState, useEffect } from 'react';

const useCurrentTime = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return currentTime;
};

// App component
const App = () => {
    const currentTime = useCurrentTime();

    return (
        <div className='mt-[200px] mx-auto flex justify-center items-center h-[300px] w-[300px]'>
            <h1 className="text-4xl font-mono font-bold text-center text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md p-4 shadow-lg">
                {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'})}
            </h1>
        </div>
    );
};

export default App;
