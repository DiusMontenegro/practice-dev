import { tempData, tempWatchedData } from './constants';
import { Navbar, Main, Footer, NumResults, Movies } from './imports';
import { useEffect, useState } from 'react';
import { fetchMovies } from './API/api';

export default function App() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState(tempData);
    const [watched, setWatched] = useState(tempWatchedData);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedId, setSelectedId] = useState('');

    function handleSelectMovie(id) {
        setSelectedId(selectedId !== id ? id : '');
    }

    function handleCloseMovie() {
        setSelectedId('');
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                setErrorMessage('');
                const moviesData = await fetchMovies(query);

                if (!moviesData) {
                    setErrorMessage('Movie not found');
                    return;
                }

                setMovies(moviesData);
                setIsLoading(false);
            } catch (error) {
                setErrorMessage('Error fetching movies', error);
            }
        };

        if (query.length <= 3) {
            setMovies([]);
            setErrorMessage('');
            return;
        }

        fetchData();
    }, [query]);

    return (
        <>
            <Navbar query={query} setQuery={setQuery}>
                <NumResults movies={movies} />
            </Navbar>
            <Main
                movies={movies}
                watched={watched}
                element={
                    <Movies movies={movies} onSelectMovie={handleSelectMovie} />
                }
                loading={isLoading}
                error={errorMessage}
                selectedId={selectedId}
                onCloseMovie={handleCloseMovie}
            ></Main>
            <Footer />
        </>
    );
}
