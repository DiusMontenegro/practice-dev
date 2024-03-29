import dius from '../assets/dius.jpg';
import johanna from '../assets/johanna.jpg';
import dave from '../assets/dave.jpg';
import filwayne from '../assets/filwayne.jpg';

const Lists = () => {
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
        { name: 'Johanna Quitoviera', image: johanna, message: 'Ginclick ko ma' },
        { name: 'Dave Lexter Supsup', image: dave, message: 'Yung kuwan' },
        { name: 'Filwayne De lara', image: filwayne, message: 'Tataa' },
    ];

    return (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {listItems.map((item, index) => (
                <li key={index} className="flex flex-col p-4 border border-slate-400 rounded-md shadow-md">
                    <img src={item.image} alt={item.name} className="w-full h-auto rounded-lg mb-4" />
                    <div className="flex flex-col justify-between flex-grow">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                            <p className="text-sm text-gray-600">{formattedDateTime}</p>
                        </div>
                        <p className="mt-2 text-sm text-gray-700">{item.message}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Lists;
