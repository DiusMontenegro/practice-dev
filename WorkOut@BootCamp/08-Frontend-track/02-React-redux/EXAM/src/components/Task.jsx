import { useState, useEffect } from 'react';
import List from './List';

function Task({ task, logs, date }) {
    const [overallPercentage, setOverallPercentage] = useState(0);

    useEffect(() => {
        updateOverallPercentage();
    }, [logs]);

    const updateOverallPercentage = () => {
        let totalPercentage = 0;
        logs.forEach((log) => {
            if (log.status === 'ongoing') {
                totalPercentage += 50;
            } else if (log.status === 'completed') {
                totalPercentage += 100;
            }
        });
        const newOverallPercentage =
            logs.length > 0 ? Math.round(totalPercentage / logs.length) : 0;
        setOverallPercentage(newOverallPercentage);
    };

    const updatePercentage = (index, status) => {
        const updatedLogs = [...logs];
        updatedLogs[index].status = status;
        updateOverallPercentage();
    };

    return (
        <div className="border w-[300px] px-3 py-6 flex flex-col gap-4 h-[300px] shadow-xl rounded-md border-[#1c1c1c]">
            <p className="flex justify-between mb-[10px]">
                <span>
                    {task} ({logs.length})
                </span>
                <span>{overallPercentage}%</span>{' '}
            </p>
            <ul className="overflow-y-auto h-[275px]">
                {logs.map((log, index) => (
                    <List
                        key={index}
                        log={log}
                        updatePercentage={(status) =>
                            updatePercentage(index, status)
                        }
                    />
                ))}
            </ul>
            <p className="italic text-center text-sm">
                {date ? `Last Added ${date}` : null}
            </p>
        </div>
    );
}

export default Task;
