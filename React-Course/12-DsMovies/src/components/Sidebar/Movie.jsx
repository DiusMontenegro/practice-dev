const Movie = ({ movie }) => {
    return (
        <li className="flex p-2 shadow-md gap-2 text-[#f1f1f1] h-[60px] cursor-pointer py-1 bg-slate-100 bg-opacity-5 rounded-md">
            <img
                className="w-[38px]"
                src={movie.Poster}
                alt={`${movie.Title} poster`}
            />
            <div className="flex flex-col justify-between">
                <h3 className="text-sm font-semibold">{movie.Title}</h3>
                <div className="flex text-xs gap-2">
                    <p>
                        <span>⭐️</span>
                        <span>{movie.imdbRating}</span>
                    </p>
                    <p>
                        <span>🌟</span>
                        <span>{movie.userRating}</span>
                    </p>
                    <p>
                        <span>⏳</span>
                        <span>{movie.runtime} min</span>
                    </p>
                </div>
            </div>
        </li>
    );
};

export default Movie;
