import { useQuiz } from '../contexts/QuizContext';

function Progress() {
    const { index, numQuestions, points, maxPossiblePoints, answer } =
        useQuiz();

    return (
        <header className="progress">
            <progress
                max={numQuestions}
                value={index + Number(answer !== null)}
            />
            <p>
                Question: {index + 1} / {numQuestions}
            </p>
            <p>
                {points} / {maxPossiblePoints}
            </p>
        </header>
    );
}

export default Progress;
