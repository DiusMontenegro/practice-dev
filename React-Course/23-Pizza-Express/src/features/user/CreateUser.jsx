import { useState } from 'react';

function CreateUser() {
    const [username, setUsername] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className="mb-4 text-sm md:text-base">
                👋 Welcome! Please start by telling us your name:
            </p>

            <input
                type="text"
                placeholder="Your full name"
                className="input input-sm input-bordered input-accent mb-8 w-72"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            {username !== '' && (
                <div>
                    <button className="btn btn-accent btn-sm">
                        Start ordering
                    </button>
                </div>
            )}
        </form>
    );
}

export default CreateUser;
