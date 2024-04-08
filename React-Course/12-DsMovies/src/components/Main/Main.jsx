import { useState } from 'react';
import {
    Result,
    Sidebar,
    WatchedList,
    Button,
    Summary,
    Movies,
} from '../../imports';

const Main = ({ movies, watched }) => {
    const [isOpen1, setIsOpen1] = useState(true);
    const [isOpen2, setIsOpen2] = useState(true);

    return (
        <main className="grid grid-cols-12 justify-center gap-4 mt-4 w-[960px] mx-auto h-[386px]">
            <Sidebar>
                <Button setIsOpen={setIsOpen2} isOpen={isOpen2} />
                {isOpen2 ? (
                    <>
                        <Summary watched={watched} />
                        <WatchedList watched={watched} />
                    </>
                ) : null}
            </Sidebar>
            <Result>
                <Button setIsOpen={setIsOpen1} isOpen={isOpen1} />
                {isOpen1 ? <Movies movies={movies} /> : null}
            </Result>
        </main>
    );
};

export default Main;
