import { useState, useEffect, useCallback } from 'react';
import { fetchMovies } from '../../API/api';

export function useMovies(query) {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [movies, setMovies] = useState([]);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        setErrorMessage('');
        try {
            const moviesData = await fetchMovies(query);
            if (!moviesData) {
                setErrorMessage('Movie not found');
            } else {
                setMovies(moviesData);
            }
        } catch (error) {
            setErrorMessage('Error fetching movies: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    }, [query]);

    useEffect(() => {
        if (query.length <= 3) {
            setMovies([]);
            setErrorMessage('');
            return;
        }
        fetchData();
    }, [query, fetchData]);

    return { isLoading, errorMessage, movies };
}
