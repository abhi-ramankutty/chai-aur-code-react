import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

function MyApp() {
    return (
        <div>
            <h1>CustomApp | Chai</h1>
        </div>
    );
}

const ReactElem = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me to visit Google',
};

const newElem = (
    <a href='https://google.com' target='_blank'>
        Google
    </a>
);

const NewReactElem = React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'Take me to google'
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
