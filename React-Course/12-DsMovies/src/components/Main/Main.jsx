import { useState } from 'react';
import {
    Result,
    Sidebar,
    WatchedList,
    Button,
    Summary,
    CircularProgress,
    Error,
    MovieDetails,
} from '../../imports';

const Main = ({
    element,
    watched,
    loading,
    error,
    selectedId,
    onCloseMovie,
}) => {
    const [sideBarOpen, setSideBarOpen] = useState(true);
    const [resultIsOpen, setResultIsOpen] = useState(true);

    return (
        <main className="grid grid-cols-12 justify-center gap-4 mt-4 w-[960px] mx-auto h-[386px]">
            <Sidebar>
                <Button setIsOpen={setSideBarOpen} isOpen={sideBarOpen} />
                {sideBarOpen ? (
                    selectedId ? (
                        <MovieDetails
                            onCloseMovie={onCloseMovie}
                            selectedId={selectedId}
                        />
                    ) : (
                        <>
                            <Summary watched={watched} />
                            <WatchedList watched={watched} />
                        </>
                    )
                ) : null}
            </Sidebar>
            {loading && !error ? (
                <CircularProgress
                    color="warning"
                    aria-label="Loading..."
                    className="mx-auto text-white col-span-7"
                    label="Loading..."
                />
            ) : error ? (
                <Error
                    className="flex text-white col-span-7 justify-center items-center"
                    message={error}
                />
            ) : (
                <Result>
                    <Button setIsOpen={setResultIsOpen} isOpen={resultIsOpen} />
                    {resultIsOpen ? element : null}
                </Result>
            )}
        </main>
    );
};

export default Main;
