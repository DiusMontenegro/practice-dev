import Card from './mainComponents/Card.jsx';
import data from '../constants/data.js';

const Main = () => {
    return (
        <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 w-[600px] mx-auto gap-2 mb-4">
            {data.map((person, index) => (
                <Card key={index} person={person} />
            ))}
        </div>
    );
};

export default Main;
