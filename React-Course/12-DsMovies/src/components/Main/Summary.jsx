import { MdLocalMovies } from '../../imports';

const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const Summary = ({ watched }) => {
    const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
    const avgUserRating = average(watched.map((movie) => movie.userRating));
    const avgRuntime = average(watched.map((movie) => movie.runtime));

    return (
        <div className="text-[#f2f2f2] p-4 mb-3 bg-gray-500 rounded-lg bg-opacity-50 shadow-lg">
            <h2 className="text-xl font-semibold">Movies you watched</h2>
            <div className="flex text-sm gap-2">
                <p>
                    <MdLocalMovies className="inline-block" />
                    <span> {watched.length} movies</span>
                </p>
                <p>
                    <span>⭐️</span>
                    <span>{avgImdbRating.toFixed(2)}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{avgUserRating.toFixed(2)}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{avgRuntime.toFixed(1)} min</span>
                </p>
            </div>
        </div>
    );
};

export default Summary;
