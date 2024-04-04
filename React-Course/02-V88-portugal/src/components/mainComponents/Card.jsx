const Card = ({ person, grayscale }) => {
    return (
        <li
            className={`flex gap-2 ml-[20px] border w-[280px] h-[70px] hover:bg-gray-200 cursor-pointer rounded-md ${grayscale}`}
        >
            <img
                className="w-[70px] h-full rounded-sm"
                src={person.photoName}
                alt={person.name}
            />
            <div className="text-[10px]">
                <h1 className="text-[12px] font-bold mb-1">{person.name}</h1>
                <p>Age: {person.age}</p>
                <p className="italic font-semibold text-gray-600">
                    {person.punchLine}
                </p>
                <p>{person.inRelationship ? 'In a relationship' : 'Single'}</p>
            </div>
        </li>
    );
};

export default Card;
