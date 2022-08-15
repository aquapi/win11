import { useEffect, useState } from "react";
import open from "../utils/redirect";

function App() {
	// Vottom style value
	const [bottomStyle, setBottomStyle] = useState();

	// Hide the start menu
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(onClick, []);

	// On click event
	function onClick() {
		if (bottomStyle !== "-100vh")
			setBottomStyle("-100vh");
		else 
			setBottomStyle(undefined);
	}

	return <>
		<div id="taskbar">
			<button onClick={onClick}></button>
			<button onClick={open("https://bing.com")}></button>
			<button onClick={open("https://example.com", "_blank")}></button>
		</div>
		<div id="start" style={{ bottom: bottomStyle }}></div>
	</>;
}

export default App;
