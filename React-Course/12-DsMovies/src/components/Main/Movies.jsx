import MovieCard from './MovieCard';

const Movies = ({ movies }) => {
    return (
        <ul className="grid grid-cols-12 gap-2">
            {movies?.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </ul>
    );
};

export default Movies;
