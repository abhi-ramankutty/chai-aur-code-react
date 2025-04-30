import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	let [counter, setCounter] = useState(5);

	const addCount = () => {
		if (counter < 20) {
			counter += 1;
			console.log("addCount", counter);
			setCounter(counter);
		}
	};
	const removeCount = () => {
		if (counter) {
			counter -= 1;
			console.log("removeCount", counter);
			setCounter(counter);
		}
	};

	return (
		<>
			<h1>Chai aur Code</h1>
			<h2>Counter: {counter}</h2>
			<button onClick={() => addCount()}>Add count</button>
			<br />
			<button onClick={removeCount}>Remove count</button>
		</>
	);
}

export default App;
