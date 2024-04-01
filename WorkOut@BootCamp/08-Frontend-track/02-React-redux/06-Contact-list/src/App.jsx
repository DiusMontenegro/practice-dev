import { useState } from 'react';
import Form from './components/Form';
import Navigation from './components/Navigation';
import Contacts from './components/Contact';

const App = () => {
    const [contacts, setContacts] = useState([]);

    const handleSubmit = (contact) => {
        setContacts([...contacts, contact]);
    };

    return (
        <div>
            <Navigation />
            <div className="flex flex-col lg:flex-row">
                <Form onSubmit={handleSubmit} />
                <Contacts contacts={contacts} />
            </div>
        </div>
    );
};

export default App;
