import Content from './components/Content';
import { useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { FaBookOpen } from 'react-icons/fa';

const App = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [stage, setStage] = useState(1);

    function handleOpen() {
        setIsOpen((isOpen) => !isOpen);
    }

    return (
        <div className="py-[25px] px-[100px] my-[90px] mx-auto w-[600px] h-auto">
            <p className="mb-4 flex justify-end">
                {isOpen ? (
                    <IoIosCloseCircleOutline
                        onClick={handleOpen}
                        className="cursor-pointer hover:text-red-500"
                    />
                ) : (
                    <FaBookOpen
                        onClick={handleOpen}
                        className="cursor-pointer hover:text-red-500"
                    />
                )}
            </p>
            {isOpen ? <Content stage={stage} setStage={setStage} /> : null}
        </div>
    );
};

export default App;
