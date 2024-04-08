import { tempData, tempWatchedData } from './constants';
import { Navbar, Main, Footer, NumResults, Movies } from './imports';
import { useState } from 'react';

export default function App() {
    const [movies, setMovies] = useState(tempData);
    const [watched, setWatched] = useState(tempWatchedData);

    return (
        <>
            <Navbar>
                <NumResults movies={movies} />
            </Navbar>
            <Main
                movies={movies}
                watched={watched}
                element={<Movies movies={movies} />}
            ></Main>
            <Footer />
        </>
    );
}
