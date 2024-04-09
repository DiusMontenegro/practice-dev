import { MovieCard } from '../../imports';

const Movies = ({ movies, onSelectMovie }) => {
    return (
        <ul className="grid grid-cols-12 gap-2">
            {movies?.map((movie) => (
                <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    selectID={onSelectMovie}
                />
            ))}
        </ul>
    );
};

export default Movies;
