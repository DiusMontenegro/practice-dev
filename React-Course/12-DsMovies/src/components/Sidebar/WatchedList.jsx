import Movie from './Movie';

const WatchedList = ({ watched }) => {
    return (
        <ul className="flex flex-col gap-2 overflow-y-auto h-[290px] p-1">
            {watched.map((movie) => (
                <Movie key={movie.imdbID} movie={movie} />
            ))}
        </ul>
    );
};

export default WatchedList;
