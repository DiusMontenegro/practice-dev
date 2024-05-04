import { useQuiz } from '../contexts/QuizContext';

function FinishedQuiz() {
    const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();

    const percentage = (points / maxPossiblePoints) * 100;

    let emoji;
    if (percentage === 100) emoji = '🚀';
    if (percentage >= 80 && percentage < 100) emoji = '🔥';
    if (percentage >= 50 && percentage < 80) emoji = '⚡';
    if (percentage < 50) emoji = '😅';
    if (percentage === 0) emoji = '😭';

    return (
        <>
            <p className="result">
                {emoji} You scored {points} points out of {maxPossiblePoints} (
                {Math.ceil(percentage).toFixed(2)}%)
            </p>
            <p className="highscore">( Highscore: {highscore} points )</p>
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: 'reset' })}
            >
                Reset Quiz
            </button>
        </>
    );
}

export default FinishedQuiz;
