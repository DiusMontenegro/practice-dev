function StartQuiz({ numQuestions, dispatch }) {
    return (
        <div className="start">
            <h2 className="font-bold">Welcome to Squizquiz</h2>
            <h3 className="font-bold">
                {numQuestions} questions to test your react mastery
            </h3>
            <button
                onClick={() => dispatch({ type: 'start' })}
                radius="full"
                size="lg"
                className="btn btn-ui"
            >
                Let&apos;s start
            </button>
        </div>
    );
}

export default StartQuiz;
