import { useReducer, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Task from './components/Task';
import Form from './components/Form';

const initialState = {
    title: '',
    designation: 'sprint',
    sprints: [],
    sprintDate: '',
    backlogs: [],
    backlogDate: '',
    tasks: ['Sprint', 'Backlog'],
};

function reducer(state, { type, payload }) {
    switch (type) {
        case 'addTitle':
            return { ...state, title: payload };
        case 'setDesignation':
            return { ...state, designation: payload };
        case 'addSprint':
            const newSprints = state.sprints.some(
                (sprint) => sprint.title === payload.title
            )
                ? state.sprints
                : [...state.sprints, payload];
            localStorage.setItem('sprints', JSON.stringify(newSprints));
            localStorage.setItem('sprintDate', payload.date);
            return {
                ...state,
                sprints: newSprints,
                sprintDate: payload.date,
            };
        case 'addBacklog':
            const newBacklogs = state.backlogs.some(
                (backlog) => backlog.title === payload.title
            )
                ? state.backlogs
                : [...state.backlogs, payload];
            localStorage.setItem('backlogs', JSON.stringify(newBacklogs));
            localStorage.setItem('backlogDate', payload.date);
            return {
                ...state,
                backlogs: newBacklogs,
                backlogDate: payload.date,
            };
        case 'clearSearch':
            return { ...state, title: '' };
        case 'clearLocalStorage':
            localStorage.clear();
            return { ...initialState };
        case 'initializeFromLocalStorage':
            const storedSprints = JSON.parse(localStorage.getItem('sprints'));
            const storedBacklogs = JSON.parse(localStorage.getItem('backlogs'));
            const storedTitle = localStorage.getItem('title');
            const storedSprintDate = localStorage.getItem('sprintDate');
            const storedBacklogDate = localStorage.getItem('backlogDate');
            return {
                ...state,
                sprints: storedSprints || [],
                backlogs: storedBacklogs || [],
                title: storedTitle || '',
                sprintDate: storedSprintDate || '',
                backlogDate: storedBacklogDate || '',
            };
        default:
            throw new Error('Invalid Type');
    }
}

const App = () => {
    const [
        {
            title,
            designation,
            tasks,
            sprints,
            backlogs,
            sprintDate,
            backlogDate,
        },
        dispatch,
    ] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: 'initializeFromLocalStorage' });
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const newTask = { title, date: getDateNow() };
        if (newTask.title === '') return;

        if (designation === 'sprint')
            dispatch({ type: 'addSprint', payload: newTask });

        if (designation === 'backlog')
            dispatch({ type: 'addBacklog', payload: newTask });

        dispatch({ type: 'clearSearch' });
    }

    function getDateNow() {
        const date = new Date();
        return `${
            date.getMonth() + 1
        }/${date.getDate()}/${date.getFullYear()} (${
            date.getHours() % 12 || 12
        }:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}${
            date.getHours() >= 12 ? 'pm' : 'am'
        })`;
    }

    return (
        <>
            <Header>
                <Form
                    dispatch={dispatch}
                    title={title}
                    designation={designation}
                    handleSubmit={handleSubmit}
                />
            </Header>
            <Main>
                {tasks.map((task, index) => (
                    <Task
                        key={index}
                        task={task}
                        logs={task === 'Sprint' ? sprints : backlogs}
                        date={task === 'Sprint' ? sprintDate : backlogDate}
                    />
                ))}
            </Main>
        </>
    );
};

export default App;
