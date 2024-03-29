const Lists = (props) => {

    return (
        <li className="flex flex-col p-4 border border-slate-400 rounded-md shadow-md">
            <img src={props.image} alt={props.name} className="w-full h-auto rounded-lg mb-4" />
            <div className="flex flex-col justify-between flex-grow">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">{props.name}</h2>
                    <p className="text-sm text-gray-600">{props.date}</p>
                </div>
                <p className="mt-2 text-sm text-gray-700">{props.message}</p>
            </div>
        </li>
    );
};

export default Lists;
