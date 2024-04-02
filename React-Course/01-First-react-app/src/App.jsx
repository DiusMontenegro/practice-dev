const App = () => {

    async function getAdvice() {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        console.log(data);
    }

    return (
        <div className="flex flex-col justify-center items-center">
            Advice
            <button className="border border-black px-4 py-2 rounded-md mt-1" onClick={getAdvice}>
                Get Advice
            </button>
        </div>
    );
};

export default App;
