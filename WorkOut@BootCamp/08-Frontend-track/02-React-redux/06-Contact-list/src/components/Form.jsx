import { useState } from 'react';
import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/button';

const Form = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, email });
        setName('');
        setEmail('');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-black bg-opacity-30 gap-2 w-full flex flex-col lg:w-[30%] h-[200px] p-4 rounded-md mr-2"
        >
            <div className="flex w-full text-md h-12 flex-wrap md:flex-nowrap gap-4">
                <Input
                    type="text"
                    label="Name"
                    value={name}
                    isRequired
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="flex w-full h-12 flex-wrap md:flex-nowrap gap-4">
                <Input
                    type="email"
                    label="Email"
                    value={email}
                    isRequired
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <Button
                type="submit"
                className="mt-5 text-white font-bold"
                color="success"
                size="md"
                variant="shadow"
            >
                Add Contact
            </Button>
        </form>
    );
};

export default Form;
