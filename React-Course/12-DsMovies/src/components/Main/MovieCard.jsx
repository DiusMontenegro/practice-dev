const MovieCard = ({ movie }) => {
    return (
        <li className="col-span-3 h-[200px] text-white text-center font-semibold">
            <h3 className="text-sm">{movie.Title}</h3>
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
            />
        </li>
    );
};

export default MovieCard;
