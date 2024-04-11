import { useLocalStorageState } from './components/hooks/useLocalStorageState';
import { useMovies } from './components/hooks/useMovies';
import { Navbar, Main, Footer, NumResults, Movies } from './imports';
import { useState } from 'react';

export default function App() {
    const [query, setQuery] = useState('');
    const [selectedId, setSelectedId] = useState('');
    const [watched, setWatched] = useLocalStorageState([], 'watched');
    const { movies, isLoading, errorMessage } = useMovies(
        query,
        handleCloseMovie
    );

    function handleSelectMovie(id) {
        setSelectedId(selectedId !== id ? id : '');
    }

    function handleCloseMovie() {
        setSelectedId('');
    }

    function handleAddWatched(movie) {
        setWatched((watched) => [...watched, movie]);
    }

    function handleRemoveMovie(id) {
        setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
    }

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
                onAddWatched={handleAddWatched}
                onDeleteWatched={handleRemoveMovie}
            ></Main>
            <Footer />
        </>
    );
}
