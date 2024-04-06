import ListItem from './ListItem';

const List = ({ items, deleteItem, selectItem }) => {
    return (
        <ul className="w-full py-2 px-4 overflow-y-auto">
            {items.map((item, index) => (
                <ListItem
                    key={index}
                    item={item}
                    deleteItem={deleteItem}
                    selectItem={selectItem}
                />
            ))}
        </ul>
    );
};

export default List;
