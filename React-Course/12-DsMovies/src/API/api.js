import Axios from 'axios';

const key = import.meta.env.VITE_API_KEY;

// Get movies by search
const fetchMovies = async (query) => {
    try {
        const response = await Axios.get(
            `http://www.omdbapi.com/?apikey=${key}&s=${query}`
        );
        return response.data.Search;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};

// Get movies by id
const fetchMovie = async (id) => {
    try {
        const response = await Axios.get(
            `http://www.omdbapi.com/?apikey=${key}&i=${id}`
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};

export { fetchMovies, fetchMovie };
