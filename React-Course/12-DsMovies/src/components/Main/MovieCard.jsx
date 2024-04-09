const numCharacters = 15;

const MovieCard = ({ movie, selectID }) => {
    return (
        <li className="col-span-3 h-[200px] text-white text-center font-semibold mb-10">
            <h3 className="text-[12px] w-full">
                {numCharacters <= 15
                    ? movie.Title
                    : movie.Title.split(' ').slice(0, numCharacters).join(' ') +
                      '...'}
            </h3>
            <div className="mx-auto text-xs mb-2">
                <p className="text-center fw-light">
                    <span className="mr-1">🗓</span>
                    <span>{movie.Year}</span>
                </p>
            </div>
            <img
                src={movie.Poster}
                alt={`${movie.Title} poster`}
                className="w-[100px] mx-auto cursor-pointer"
                onClick={() => selectID(movie.imdbID)}
            />
        </li>
    );
};

export default MovieCard;
