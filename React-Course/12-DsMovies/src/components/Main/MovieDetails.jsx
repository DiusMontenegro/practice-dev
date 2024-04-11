import { useEffect, useRef, useState } from 'react';
import { fetchMovie } from '../../API/api';
import {
    Star,
    CircularProgress,
    IoArrowBackCircleOutline,
} from '../../imports';

const MovieDetails = ({ selectedId, onCloseMovie, onAddWatched, watched }) => {
    const [movie, setMovie] = useState({});
    const [loadMovie, setLoadMovie] = useState(false);
    const [userRating, setUserRating] = useState(0);

    const countRef = useRef(0);

    useEffect(
        function () {
            if (userRating) countRef.current++;
        },
        [userRating]
    );

    const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
    const watchedUserRating = watched.find(
        (movie) => movie.imdbID === selectedId
    )?.userRating;

    function handleUserRating(value) {
        setUserRating(value);
    }

    const {
        Title: title,
        Year: year,
        Poster: poster,
        Runtime: runtime,
        imdbRating,
        Plot: plot,
        Released: released,
        Actors: actors,
        Director: director,
        Genre: genre,
    } = movie;

    function handleAdd() {
        const newMovie = {
            imdbID: selectedId,
            title,
            year,
            poster,
            imdbRating: Number(imdbRating),
            runtime: Number(runtime.split(' ').at(0)),
            userRating,
            rateDecisions: countRef.current,
        };
        onAddWatched(newMovie);

        onCloseMovie();
    }

    useEffect(
        function () {
            function callback(e) {
                if (e.code === 'Escape') {
                    onCloseMovie();
                }
            }

            document.addEventListener('keydown', callback);

            return function () {
                document.removeEventListener('keydown', callback);
            };
        },
        [onCloseMovie]
    );

    useEffect(
        function () {
            async function getMovie() {
                try {
                    setLoadMovie(true);
                    const movieDetails = await fetchMovie(selectedId);
                    setMovie(movieDetails);
                    setLoadMovie(false);
                } catch (err) {
                    console.error(err);
                }
            }
            getMovie();
        },
        [selectedId]
    );

    useEffect(
        function () {
            if (!title) return;
            document.title = `MOVIE | ${title}`;

            return function () {
                document.title = 'DS Movies';
            };
        },
        [title]
    );

    return (
        <>
            {loadMovie ? (
                <CircularProgress
                    size="sm"
                    color="warning"
                    label="Loading..."
                    className="mx-auto w-full h-full py-50px flex justify-center items-center text-white"
                />
            ) : (
                <div>
                    <span
                        role="button"
                        className="inline-block align-top text-[#1c1c1c] rounded-full bg-[#f2f2f2] text-2xl text-center bg-opacity-90 shadow-2xl mb-4"
                        onClick={onCloseMovie}
                    >
                        <IoArrowBackCircleOutline />
                    </span>
                    <header className="text-[#f2f2f2] bg-gray-200 bg-opacity-10 flex gap-2 rounded-md">
                        <img className="w-[90px]" src={poster} alt={title} />
                        <div className="px-2 py-3 flex flex-col gap-2 w-full">
                            <h3 className="font-bold mb-2">{title}</h3>
                            <h5 className="text-[10px]">
                                {released} - {runtime}
                            </h5>
                            <h5>{genre}</h5>
                            <h5>⭐ {imdbRating} IMDb rating</h5>
                        </div>
                    </header>
                    <section className="p-3 text-white">
                        {isWatched ? (
                            <p className="text-center border px-2 py-1 text-xs my-4 cursor-default">
                                You already rated this movie {watchedUserRating}
                                ⭐
                            </p>
                        ) : (
                            <>
                                <Star
                                    className="text-yellow-500 my-1 flex py-2"
                                    maxStars={10}
                                    key={selectedId}
                                    onSetRating={handleUserRating}
                                />
                                {userRating > 0 ? (
                                    <button
                                        onClick={() => handleAdd()}
                                        className="text-xs mb-3 hover:bg-slate-200 hover:bg-opacity-10 px-2 py-1 border block mx-auto"
                                    >
                                        + Add to Watched List
                                    </button>
                                ) : null}
                            </>
                        )}
                        <p className="italic text-xs tracking-wide mb-2">
                            {plot}
                        </p>
                        <p className="italic text-xs tracking-wide mb-2">
                            Starring: {actors}
                        </p>
                        <p className="italic text-xs tracking-wide mb-2">
                            Director: {director}
                        </p>
                    </section>
                </div>
            )}
        </>
    );
};

export default MovieDetails;
