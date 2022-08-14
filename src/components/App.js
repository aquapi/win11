import { useEffect, useState } from "react";

function App() {
	const [clicked, setClicked] = useState(false);

	// Refers to the old bottom style value
	const [bottomStyle, setBottomStyle] = useState();

	// Hide the start menu
	useEffect(onClick, [bottomStyle, clicked]);

	// On click event
	function onClick() {
		const startMenu = document.getElementById("start");
		if (!bottomStyle || bottomStyle === "-100vh")
			setBottomStyle(startMenu.style.bottom);

		if (!clicked)
			startMenu.style.bottom = "-100vh";
		else
			startMenu.style.bottom = bottomStyle;

		setClicked(!clicked);
	}

	return <>
		<div id="taskbar" onClick={onClick}></div>
		<div id="start"></div>
	</>;
}

export default App;
