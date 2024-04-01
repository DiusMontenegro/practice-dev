import { useState, useEffect } from 'react';
import { Switch } from '@nextui-org/react';
import { MoonIcon } from './icons/MoonIcon';
import { SunIcon } from './icons/SunIcon';

const Navbar = ({ setDark }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            setDark(true);
        } else {
            document.documentElement.classList.remove('dark');
            setDark(false);
        }
    }, [theme, setDark]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className='container py-4 flex justify-between'>
            <h1 className='text-2xl'>
                {theme === 'dark'
                    ? `MVC: Michael V. Choi`
                    : `MVC: Model, View, Controller`
                }
            </h1>
            <Switch
                defaultSelected
                size="sm"
                color="default"
                thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                        <SunIcon className={className} />
                    ) : (
                        <MoonIcon className={className} />
                    )
                }
                onClick={handleThemeSwitch}
            />
        </div>
    );
};

export default Navbar;
