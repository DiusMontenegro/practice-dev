import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import App from './App';
import './index.css';
import Star from './components/utils/Star';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <NextUIProvider>
            <App />
            <Star
                maxStars={5}
                color="#FACC14"
                size={48}
                className="flex justify-center items-start gap-4"
                messages={['Horrible', 'Bad', 'Good', 'Very Good', 'Great']}
                defaultRating={3}
            />
        </NextUIProvider>
    </React.StrictMode>
);
