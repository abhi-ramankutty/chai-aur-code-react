import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
	const [password, setPassword] = useState("");
	const [pwdLength, setPwdLength] = useState(8);
	const [hasNumbers, setHasNumbers] = useState(false);
	const [hasChar, setHasChar] = useState(false);
	const passwordRef = useRef(null)

	const generatePassword = () => {
		let passwordStr = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		if (hasNumbers) {
			str += "0123456789";
		}
		if (hasChar) {
			str += "!@#$%^&*-_+=[]{}~`";
		}

		for (let index = 0; index < pwdLength; index++) {
			const char = Math.floor(Math.random() * str.length + 1);
			passwordStr += str[char];
		}

		setPassword(passwordStr);
	};

	const copyToClipboard = () => {
		passwordRef.current?.select();
		window.navigator.clipboard.writeText(password);
	}

	const passwordGeneratorFn = useCallback(generatePassword, [pwdLength, hasNumbers, hasChar, setPassword])


	useEffect(passwordGeneratorFn, [pwdLength, hasNumbers, hasChar])

	return (
		<>
			<div className="bg-gray-800 text-white w-full h-screen flex justify-center items-center">
				<div className="bg-gray-600 w-md rounded-lg p-3">
					<h1 className="text-center text-2xl font-bold mb-4">
						Password Generator
					</h1>
					<div className="flex bg-gray-300 rounded outline-none overflow-hidden mb-4">
						<input
							type="text"
							placeholder="password"
							className="w-full outline-none text-orange-600 px-2"
							value={password}
							readOnly
							ref={passwordRef}
						/>
						<button
							className="bg-blue-700 outline-none px-3 py-1 cursor-pointer active:bg-blue-950"
							onClick={copyToClipboard}>
							Copy
						</button>
					</div>
					<div className="flex justify-between items-baseline">
						<div className="flex items-center gap-2">
							<input
								type="range"
								name="length"
								min={6}
								max={20}
								value={pwdLength}
								onChange={(event) => {
									setPwdLength(event.target.value);
								}}
								className="cursor-pointer"
							/>
							<label htmlFor="length">Length: {pwdLength}</label>
						</div>
						<div className="flex items-center gap-1">
							<input
								type="checkbox"
								name="numberField"
								id="numberField"
								value={hasNumbers}
								onChange={() => {
									setHasNumbers((prevVal) => !prevVal);
								}}
							/>
							<label htmlFor="numberField">Numbers</label>
						</div>
						<div className="flex items-center gap-1">
							<input
								type="checkbox"
								name="charField"
								id="charField"
								value={hasChar}
								onChange={() => {
									setHasChar((prevVal) => !prevVal);
								}}
							/>
							<label htmlFor="charField">Characters</label>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
