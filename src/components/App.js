const displayTop = "calc((93.6458vh - 646.429px) / 2)";

function App() {
	function onClick() {
		const element = document.getElementById("start");

		if (displayTop === element.style.top)
			element.style.top = "100vh";
		else
			element.style.top = displayTop;
	}

	return <>
		<div id="taskbar" onClick={onClick}></div>
		<div id="start"></div>
	</>;
}

export default App;
