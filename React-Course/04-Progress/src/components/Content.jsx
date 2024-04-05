import message from '../constants/data';

const Content = ({ stage, setStage }) => {
    function handlePrevious() {
        setStage((stage) => (stage > 1 ? stage - 1 : 1));
    }

    function handleNext() {
        setStage((stage) => (stage < 4 ? stage + 1 : 4));
    }
    return (
        <div className=" bg-[#f7f7f7] rounded-[7px] p-4">
            <ul className="flex justify-between">
                <li className={stage >= 1 ? 'active' : ''}>1</li>
                <li className={stage >= 2 ? 'active' : ''}>2</li>
                <li className={stage >= 3 ? 'active' : ''}>3</li>
                <li className={stage >= 4 ? 'active' : ''}>4</li>
            </ul>

            <p className="message">
                Stage {stage}: {message[stage - 1]}
            </p>

            <div className="flex justify-between">
                <button
                    className="button bg-red-500 text-white"
                    onClick={handlePrevious}
                >
                    Previous
                </button>
                <button
                    className="button bg-red-500 text-white"
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Content;
