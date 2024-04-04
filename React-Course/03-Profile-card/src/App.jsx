import Card from './components/Card';
import data from './constants/Data.js';

const App = () => {
    return (
        <div className="flex justify-center items-center h-[100vh] w-full bg-[#f2f2f2]">
            {data.map((person, index) => (
                <Card key={index} info={person} />
            ))}
        </div>
    );
};

export default App;
