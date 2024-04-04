import message from './constants/data';

const App = () => {
    let stage = 2;

    function handlePrevious() {
        alert('Previous');
    }

    function handleNext() {
        alert('Next');
    }

    return (
        <div className="w-[600px] bg-[#f7f7f7] rounded-[7px] py-[25px] px-[100px] my-[100px] mx-auto">
            <ul className="flex justify-between">
                <li className={`list ${stage === 1 ? 'active' : ''}`}>1</li>
                <li className={`list ${stage === 2 ? 'active' : ''}`}>2</li>
                <li className={`list ${stage === 3 ? 'active' : ''}`}>3</li>
                <li className={`list ${stage === 4 ? 'active' : ''}`}>4</li>
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

export default App;
