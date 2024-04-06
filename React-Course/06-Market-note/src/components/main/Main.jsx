import List from './List';
import Sidebar from './Sidebar';
import { useState } from 'react';

const Main = ({ items, deleteItem, selectItem, deleteAll }) => {
    const [sortBy, setSortBy] = useState('input');

    function handleSort(value) {
        setSortBy(value);
    }

    let sortedItems;

    if (sortBy === 'input') sortedItems = items;
    if (sortBy === 'description')
        sortedItems = items
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === 'addedStatus')
        sortedItems = items
            .slice()
            .sort((a, b) => Number(a.isAdded) - Number(b.isAdded));

    return (
        <main className="h-[320px] w-[960px] mx-auto flex rounded-lg mb-1">
            <Sidebar
                sortBy={sortBy}
                handleSort={handleSort}
                deleteAll={deleteAll}
            />
            <List
                items={sortedItems}
                deleteItem={deleteItem}
                selectItem={selectItem}
            />
        </main>
    );
};

export default Main;
