import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import App from './App';
import './index.css';
import { QuizProvider } from './contexts/QuizContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <NextUIProvider>
            <QuizProvider>
                <App />
            </QuizProvider>
        </NextUIProvider>
    </React.StrictMode>
);
