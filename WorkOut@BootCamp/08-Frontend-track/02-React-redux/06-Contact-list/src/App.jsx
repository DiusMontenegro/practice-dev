import { useState } from 'react';
import Form from './components/Form';
import Contacts from './components/Contact';

const App = () => {
    const [contacts, setContacts] = useState([]);

    const handleSubmit = (contact) => {
        setContacts([...contacts, contact]);
    };

    return (
        <div>
            <Form onSubmit={handleSubmit} />
            <Contacts contacts={contacts} />
        </div>
    );
};

export default App;
