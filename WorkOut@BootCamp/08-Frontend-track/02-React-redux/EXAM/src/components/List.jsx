import { useState } from 'react';
import { FaRegClock } from 'react-icons/fa';
import { GiCycle } from 'react-icons/gi';
import { FaRegCheckCircle } from 'react-icons/fa';

function List({ log, updatePercentage }) {
    const [status, setStatus] = useState('pending');
    const { title } = log;
    let percentage = 0;

    function handleClick(value) {
        setStatus(value);
        updatePercentage(value);
    }

    if (status === 'ongoing') {
        percentage = 50;
    } else if (status === 'completed') {
        percentage = 100;
    }

    return (
        <li
            className={`flex border-2 justify-between p-2 mb-1 ${
                status === 'ongoing'
                    ? 'border-yellow-500'
                    : status === 'completed'
                    ? 'border-green-500'
                    : 'border-black'
            }`}
        >
            <p>{title}</p>
            <p className="flex text-lg pt-1 gap-2">
                <FaRegClock
                    onClick={() => handleClick('pending')}
                    role="button"
                />
                <GiCycle onClick={() => handleClick('ongoing')} role="button" />
                <FaRegCheckCircle
                    onClick={() => handleClick('completed')}
                    role="button"
                />
            </p>
        </li>
    );
}

export default List;
