import { useState } from 'react';
import Card from './components/Card';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    const myObj = {
        name: 'Shinigami',
        book: 'DeathNote',
    };
    const myArr = [1, 2, 3, 4, 5];
    return (
        <>
            <h1 className='bg-green-400 text-black'>Tailwaind</h1>

            <Card username='Shinigami' btnText="Visit me" obj={myObj} arr={myArr} />
            <Card username='Light Yagami' />
        </>
    );
}

export default App;

/**
 * In a component you can pass props / content as a variable
 */