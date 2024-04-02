import { useState, useEffect } from 'react';
import { BsGlobe2 } from 'react-icons/bs';
import { Button, Switch } from '@nextui-org/react';
import { MoonIcon } from '../assets/icons/MoonIcon';
import { SunIcon } from '../assets/icons/SunIcon';

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
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    return (
        <div className="container border-b-[1px] dark:border-none border-dashed h-[60px] flex items-center justify-between">
            <h1 className="font-bold">DS Orders</h1>
            <div className="flex items-center gap-4">
                <BsGlobe2 />
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
                <div className="flex flex-wrap gap-4 items-center">
                    <Button
                        color="primary"
                        size="sm"
                        variant="shadow"
                        className="font-bold text-white shadow-md"
                    >
                        About Us
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
