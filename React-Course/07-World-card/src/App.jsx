import data from './constants.js/data';
import List from './components/List';
import { useState } from 'react';

const App = () => {
    const [selectedId, setSelectedId] = useState('');

    return (
        <>
            <h1 className="text-center text-3xl tracking-widest text-[#00AEEF] font-semibold pt-[15px] cursor-pointer">
                World Card
            </h1>
            <ul className="grid grid-cols-3 justify-center item gap-4 w-[980px] mx-auto pt-2">
                {data.map((place, index) => (
                    <List
                        key={index}
                        place={place}
                        selectedId={selectedId}
                        setSelectedId={setSelectedId}
                    />
                ))}
            </ul>
            <footer className="text-[12px] text-center mt-5">
                &copy; World Card. Dius Montenegro. All rights reserved.
            </footer>
        </>
    );
};

export default App;
