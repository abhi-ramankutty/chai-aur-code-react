import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from './components/Card';

function App() {

	const myObj = {
		firstName: 'Light',
		lastName: 'Yagami'
	}
	return (
		<>
			<div className="text-3xl font-bold underline">Hello world</div>
			<Card cardName="shinigami" btnText="Visit me"/>
			<Card cardName="ryuk"/>
		</>
	);
}

export default App;
