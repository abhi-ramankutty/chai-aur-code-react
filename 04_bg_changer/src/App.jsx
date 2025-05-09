import { useState } from "react";
import "./App.css";

function App() {
	const [bgColor, setBgColor] = useState("olive");
	const changeBgColor = (color) => {
		setBgColor(color);
	};
	return (
		<>
			<div
				className="h-screen w-full duration-300"
				style={{ backgroundColor: bgColor }}>
				<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
					<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
						<button
							className="min-w-15 px-2 rounded-xl text-white cursor-pointer hover:scale-102"
							onClick={() => changeBgColor("red")}
							style={{ backgroundColor: "red" }}>
							Red
						</button>
						<button
							className="min-w-15 px-2 rounded-xl text-white cursor-pointer hover:scale-102"
							onClick={() => changeBgColor("olive")}
							style={{ backgroundColor: "olive" }}>
							Olive
						</button>
						<button
							className="min-w-15 px-2 rounded-xl text-black cursor-pointer hover:scale-102"
							onClick={() => changeBgColor("yellow")}
							style={{ backgroundColor: "yellow" }}>
							Yellow
						</button>
						<button
							className="min-w-15 px-2 rounded-xl text-white cursor-pointer hover:scale-102"
							onClick={() => changeBgColor("green")}
							style={{ backgroundColor: "green" }}>
							Green
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
