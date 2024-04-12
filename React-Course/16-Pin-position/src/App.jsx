import { useState } from 'react';
import { Button } from '@nextui-org/react';
import { useGeolocation } from './hooks/useGeolocation';

export default function App() {
    const [countClicks, setCountClicks] = useState(0);
    const {
        position: { lat, lng },
        error,
        isLoading,
        getPosition,
    } = useGeolocation();

    function handleClick() {
        setCountClicks((count) => count + 1);
        getPosition();
    }

    return (
        <div className="h-screen bg-[#f2f2f2] flex flex-col justify-center items-center ">
            <h1 className="text-2xl font-semibold mb-4">📍 Pin Position</h1>

            <Button
                radius="full"
                className="mb-6 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                onClick={handleClick}
                disabled={isLoading}
                size="sm"
            >
                Get my position
            </Button>

            {isLoading && <p>Loading position...</p>}
            {error && <p>{error}</p>}
            {!isLoading && !error && lat && lng && (
                <p className="border py-1 px-2 border-black mb-2 rounded-sm">
                    Your GPS position:{' '}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
                        className="text-blue-600 underline"
                    >
                        {lat}, {lng}
                    </a>
                </p>
            )}

            <p>
                You requested position{' '}
                <span className="border-b-2 border-b-black pb-[1px]">
                    {countClicks}
                </span>{' '}
                times
            </p>
        </div>
    );
}
