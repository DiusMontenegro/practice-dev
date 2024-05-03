import Options from './Options';

function Question({ question, dispatch, answer }) {
    return (
        <div>
            <h4 className="text-4xl text-center font-semibold">
                {question.question}
            </h4>
            <Options question={question} dispatch={dispatch} answer={answer} />
        </div>
    );
}

export default Question;
