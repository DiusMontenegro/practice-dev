import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartQuiz from './components/StartQuiz';
import Question from './components/Question';
import NextButton from './components/NextButton';
import Progress from './components/Progress';
import FinishedQuiz from './components/FinishedQuiz';
import Footer from './components/Footer';
import Timer from './components/Timer';
import { useQuiz } from './contexts/QuizContext';

const App = () => {
    const { status } = useQuiz();

    return (
        <div className="app">
            <Header />
            <Main>
                {status === 'loading' && <Loader />}
                {status === 'error' && <Error />}
                {status === 'ready' && <StartQuiz />}
                {status === 'active' && (
                    <>
                        <Progress />
                        <Question />
                        <Footer>
                            <Timer />
                            <NextButton />
                        </Footer>
                    </>
                )}
                {status === 'finished' && <FinishedQuiz />}
            </Main>
        </div>
    );
};

export default App;
