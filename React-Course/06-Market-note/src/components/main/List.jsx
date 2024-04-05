import ListItem from './ListItem';
import testData from '../../constants/data';

const List = () => {
    return (
        <ul className="w-full py-2 px-4 overflow-y-auto">
            {testData.map((item, index) => (
                <ListItem key={index} item={item} />
            ))}
        </ul>
    );
};

export default List;
