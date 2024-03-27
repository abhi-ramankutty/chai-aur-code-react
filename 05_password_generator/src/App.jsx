import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
    const [length, setLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState('');
    const passwordRef = useRef(null);

    /**
     * ### useCallback
     * This is used optimise the function, variables, threads etc by caching such data internally \
     * This is only for optimization
     */
    const passwordGenerator = useCallback(() => {
        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if (numAllowed) {
            str += '0123456789';
        }
        if (charAllowed) {
            str += '!@#$%^&*-_+=[]{}~`';
        }
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str[char];
        }
        setPassword(pass);
    }, [length, numAllowed, charAllowed, setPassword]);

    const copyPasswordToClipboard = () => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
    };

    /**
     * ### useEffect
     * This is a hook that runs the callback once when initialized \
     * It will re-run each time when there is any change in the provided dependencies
     */
    useEffect(() => {
        passwordGenerator();
    }, [length, numAllowed, charAllowed, passwordGenerator]);

    return (
        <>
            <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
                <h1 className='text-white text-center my-3'>
                    Password generator
                </h1>
                <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                    <input
                        type='text'
                        value={password}
                        className='outline-none w-full py-1 px-3'
                        placeholder='Password'
                        readOnly
                        ref={passwordRef}
                    />
                    <button
                        onClick={copyPasswordToClipboard}
                        className='outline-none bg-blue-700 text-white px-4'>
                        Copy
                    </button>
                </div>

                <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type='range'
                            min={6}
                            max={20}
                            value={length}
                            className='cursor-pointer'
                            onChange={(event) => {
                                setLength(event.target.value);
                            }}
                        />
                        <label>Length: {length}</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type='checkbox'
                            defaultChecked={numAllowed}
                            id='numberInput'
                            onChange={() => {
                                setNumAllowed((prev) => !prev);
                            }}
                        />
                        <label htmlFor='numberInput'>Numbers</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type='checkbox'
                            defaultChecked={charAllowed}
                            id='characterInput'
                            onChange={() => {
                                setCharAllowed((prev) => !prev);
                            }}
                        />
                        <label htmlFor='characterInput'>Characters</label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
