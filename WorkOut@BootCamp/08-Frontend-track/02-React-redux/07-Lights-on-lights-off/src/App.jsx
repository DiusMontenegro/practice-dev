import Navbar from './components/Navbar';
import { useState } from 'react';

const App = () => {
    const [dark, setDark] = useState(false);

    return (
        <div className={`h-screen ${dark ? 'dark' : ''}`}>
            <Navbar setDark={setDark} />
            <div className="flex justify-center items-center">
                {dark ? (
                    <img className='rounded-md' src="./src/assets/dark-mode.png" alt="dark" />
                ) : (
                    <img className='rounded-md' src="./src/assets/light-mode.png" alt="light" />
                )}
            </div>
        </div>
    );
};

export default App;
