import { useState } from 'react';

function App() {
    const [bgColor, setBgColor] = useState('olive');

    /**
     * This function can be called in the JSX directly like ```onClick={setRed}``` \
     * But not the ```setBgColor(bgColor)```, it has a param and when you write () it gets executed.
     * Because onClick wants a function that it can execute and not the return val of a function \
     * In short, you can directly write the function if it doesnt have any params and if it has params, write it inside a callback-fn
     */
    const setRed = () => {
        setBgColor('red');
    };
    return (
        <>
            <div
                className='w-full h-screen duration-200'
                style={{ backgroundColor: bgColor }}>
                <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                        <button
                            onClick={setRed}
                            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                            style={{ backgroundColor: 'red' }}>
                            Red
                        </button>
                        <button
                            onClick={() => setBgColor('green')}
                            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                            style={{ backgroundColor: 'green' }}>
                            Green
                        </button>
                        <button
                            onClick={() => setBgColor('blue')}
                            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                            style={{ backgroundColor: 'blue' }}>
                            Blue
                        </button>
                        <button
                            onClick={() => setBgColor('olive')}
                            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                            style={{ backgroundColor: 'olive' }}>
                            Olive
                        </button>
                        <button
                            onClick={() => setBgColor('gray')}
                            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                            style={{ backgroundColor: 'gray' }}>
                            Gray
                        </button>
                        <button
                            onClick={() => setBgColor('yellow')}
                            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
                            style={{ backgroundColor: 'yellow' }}>
                            Yellow
                        </button>
                        <button
                            onClick={() => setBgColor('pink')}
                            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
                            style={{ backgroundColor: 'pink' }}>
                            Pink
                        </button>
                        <button
                            onClick={() => setBgColor('purple')}
                            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                            style={{ backgroundColor: 'purple' }}>
                            Purple
                        </button>
                        <button
                            onClick={() => setBgColor('lavender')}
                            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
                            style={{ backgroundColor: 'lavender' }}>
                            Lavender
                        </button>
                        <button
                            onClick={() => setBgColor('white')}
                            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
                            style={{ backgroundColor: 'white' }}>
                            White
                        </button>
                        <button
                            onClick={() => setBgColor('black')}
                            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                            style={{ backgroundColor: 'black' }}>
                            Black
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
