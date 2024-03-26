import { useState } from 'react';
import './App.css';

function App() {
    let [counter, setCounter] = useState(5);

    const addValue = () => {
        ++counter;
        if (counter <= 10) {
            setCounter(counter);
        }
    };

    const removeValue = () => {
        --counter;
        if (counter >= 0) {
            setCounter(counter);
        }
    };

    return (
        <>
            <h1>Chai aur React</h1>
            <h2>Counter value: {counter}</h2>

            <div>
                <button onClick={addValue}>Increment</button>
                <button style={{ marginLeft: '5px' }} onClick={removeValue}>
                    Decrement
                </button>
            </div>
        </>
    );
}

export default App;
