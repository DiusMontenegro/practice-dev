import { useState } from 'react';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Header from './components/header/Header';
import Main from './components/main/Main';

const App = () => {
    const [items, setItems] = useState([]);

    function onDeleteAll() {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete the list?'
        );

        if (!confirmDelete) return;

        setItems([]);
    }

    function onAddItems(item) {
        setItems((items) => [...items, item]);
    }

    function onDeleteItems(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function onSelectItems(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, isAdded: !item.isAdded } : item
            )
        );
    }

    return (
        <>
            <Header />
            <Form addItem={onAddItems} />
            <Main
                items={items}
                deleteItem={onDeleteItems}
                selectItem={onSelectItems}
                deleteAll={onDeleteAll}
            />
            <Footer items={items} />
        </>
    );
};

export default App;
