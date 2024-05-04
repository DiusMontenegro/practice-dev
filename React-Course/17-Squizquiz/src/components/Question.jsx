import { useQuiz } from '../contexts/QuizContext';
import Options from './Options';

function Question() {
    const { questions, index } = useQuiz();
    const question = questions.at(index);

    return (
        <div>
            <h4 className="text-4xl text-center font-semibold">
                {question.question}
            </h4>
            <Options question={question} />
        </div>
    );
}

export default Question;
