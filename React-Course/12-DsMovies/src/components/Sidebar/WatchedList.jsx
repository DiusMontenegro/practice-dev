import Movie from './Movie';

const WatchedList = ({ watched, deleteMovie }) => {
    return (
        <ul className="flex flex-col gap-2 overflow-y-auto h-[300px] p-1">
            {watched.map((movie) => (
                <Movie
                    key={movie.imdbID}
                    movie={movie}
                    deleteMovie={deleteMovie}
                />
            ))}
        </ul>
    );
};

export default WatchedList;
