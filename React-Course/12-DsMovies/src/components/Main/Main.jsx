import { useState } from 'react';
import { Result, Sidebar, WatchedList, Button, Summary } from '../../imports';

const Main = ({ element, watched }) => {
    const [sideBarOpen, setSideBarOpen] = useState(true);
    const [resultIsOpen, setResultIsOpen] = useState(true);

    return (
        <main className="grid grid-cols-12 justify-center gap-4 mt-4 w-[960px] mx-auto h-[386px]">
            <Sidebar>
                <Button setIsOpen={setSideBarOpen} isOpen={sideBarOpen} />
                {sideBarOpen ? (
                    <>
                        <Summary watched={watched} />
                        <WatchedList watched={watched} />
                    </>
                ) : null}
            </Sidebar>
            <Result>
                <Button setIsOpen={setResultIsOpen} isOpen={resultIsOpen} />
                {resultIsOpen ? element : null}
            </Result>
        </main>
    );
};

export default Main;
