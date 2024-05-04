import { useEffect } from 'react';
import { useQuiz } from '../contexts/QuizContext';

function Timer() {
    const { secondsRemaining, dispatch } = useQuiz();

    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;

    useEffect(
        function () {
            const timer = setInterval(() => {
                dispatch({ type: 'tick' });
            }, 1000);
            return () => {
                clearInterval(timer);
            };
        },
        [dispatch]
    );

    return (
        <div className="timer">
            {minutes < 10 && '0'}
            {minutes} : {seconds < 10 && '0'}
            {seconds}
        </div>
    );
}

export default Timer;
