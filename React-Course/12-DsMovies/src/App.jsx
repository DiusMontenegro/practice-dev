import { tempData, tempWatchedData } from './constants';
import { Navbar, Main, Footer, Brand, NumResults, Search } from './imports';
import { useState } from 'react';

export default function App() {
    const [movies, setMovies] = useState(tempData);
    const [watched, setWatched] = useState(tempWatchedData);

    return (
        <>
            <Navbar>
                <Brand />
                <Search />
                <NumResults movies={movies} />
            </Navbar>
            <Main movies={movies} watched={watched} />
            <Footer />
        </>
    );
}
