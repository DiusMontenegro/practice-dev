import { useEffect, useState } from 'react';
import { fetchMovie } from '../../API/api';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { Star, CircularProgress } from '../../imports';

const MovieDetails = ({ selectedId, onCloseMovie }) => {
    const [movie, setMovie] = useState({});
    const [loadMovie, setLoadMovie] = useState(false);

    const {
        Title: title,
        Poster: poster,
        Runtime: runtime,
        imdbRating,
        Plot: plot,
        Released: released,
        Actors: actors,
        Director: director,
        Genre: genre,
    } = movie;

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
                        <Star
                            className="text-yellow-500 my-1 flex py-2"
                            maxStars={10}
                            key={selectedId}
                        />
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
