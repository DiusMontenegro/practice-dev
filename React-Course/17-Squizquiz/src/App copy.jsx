import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import axios from 'axios';
import StartQuiz from './components/StartQuiz';
import Question from './components/Question';
import NextButton from './components/NextButton';
import Progress from './components/Progress';
import FinishedQuiz from './components/FinishedQuiz';
import Footer from './components/Footer';
import Timer from './components/Timer';

const secondsPerQuestion = 30;

const initialState = {
    questions: [],

    //loading, 'error', 'ready', 'active', 'finished'
    status: 'loading',
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    secondsRemaining: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case 'dataReceived':
            return { ...state, questions: action.payload, status: 'ready' };
        case 'dataFailed':
            return { ...state, status: 'error' };
        case 'start':
            return {
                ...state,
                status: 'active',
                secondsRemaining: state.questions.length * secondsPerQuestion,
            };
        case 'newAnswer':
            const question = state.questions.at(state.index);

            return {
                ...state,
                answer: action.payload,
                points:
                    action.payload === question.correctOption
                        ? state.points + question.points
                        : state.points,
            };
        case 'nextQuestion':
            return { ...state, index: state.index + 1, answer: null };
        case 'finished':
            return {
                ...state,
                status: 'finished',
                highscore:
                    state.points > state.highscore
                        ? state.points
                        : state.highscore,
            };
        case 'reset':
            return {
                ...initialState,
                questions: state.questions,
                status: 'ready',
                highscore: state.highscore,
            };
        case 'tick':
            return {
                ...state,
                secondsRemaining: state.secondsRemaining - 1,
                status:
                    state.secondsRemaining === 0 ? 'finished' : state.status,
            };
        default:
            throw new Error('No data Received');
    }
}

const App = () => {
    const [
        {
            questions,
            status,
            index,
            answer,
            points,
            highscore,
            secondsRemaining,
        },
        dispatch,
    ] = useReducer(reducer, initialState);

    const numQuestions = questions.length;
    const maxPossiblePoints = questions.reduce(
        (prev, cur) => prev + cur.points,
        0
    );

    useEffect(function () {
        async function getQuestions() {
            try {
                const response = await axios.get(
                    'http://localhost:8000/questions'
                );
                dispatch({ type: 'dataReceived', payload: response.data });
            } catch (error) {
                dispatch({ type: 'dataFailed' });
            }
        }
        getQuestions();
    }, []);

    return (
        <div className="app">
            <Header />
            <Main>
                {status === 'loading' && <Loader />}
                {status === 'error' && <Error />}
                {status === 'ready' && (
                    <StartQuiz
                        numQuestions={numQuestions}
                        dispatch={dispatch}
                    />
                )}
                {status === 'active' && (
                    <>
                        <Progress
                            index={index}
                            numQuestions={numQuestions}
                            points={points}
                            maxPossiblePoints={maxPossiblePoints}
                            answer={answer}
                        />
                        <Question
                            question={questions[index]}
                            dispatch={dispatch}
                            answer={answer}
                        />
                        <Footer>
                            <Timer
                                secondsRemaining={secondsRemaining}
                                dispatch={dispatch}
                            />
                            <NextButton
                                index={index}
                                numQuestions={numQuestions}
                                dispatch={dispatch}
                                answer={answer}
                            />
                        </Footer>
                    </>
                )}
                {status === 'finished' && (
                    <FinishedQuiz
                        points={points}
                        maxPossiblePoints={maxPossiblePoints}
                        highscore={highscore}
                        dispatch={dispatch}
                    />
                )}
            </Main>
        </div>
    );
};

export default App;
