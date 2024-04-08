const NumResults = ({ movies }) => {
    return (
        <p className="justify-self-end text-xl">
            Found <strong>{movies.length}</strong> results
        </p>
    );
};

export default NumResults;
