import Lists from './components/Lists';
import dius from '../src/assets/dius.jpg';
import johanna from '../src/assets/johanna.jpg';
import dave from '../src/assets/dave.jpg';
import filwayne from '../src/assets/filwayne.jpg';

const currentDate = new Date();

const formattedDateTime = currentDate.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
});

const listItems = [
    { name: 'Dius Montenegro', image: dius, message: 'All goods na all goods' },
    { name: 'Dave Lexter Supsup', image: dave, message: 'Yung kuwan' },
    { name: 'Johanna Quitoviera', image: johanna, message: 'Ginclick ko ma' },
    { name: 'Filwayne De lara', image: filwayne, message: 'Tataa' },
];

const App = () => {
    return (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {listItems.map((item, index) => (
                <Lists
                    key={index}
                    date={formattedDateTime}
                    image={item.image}
                    name={item.name}
                    message={item.message}
                />
            ))}
        </ul>
    );
};


export default App;
