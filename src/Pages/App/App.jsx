import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch("routes/api/sysk.js")
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.error("Error:", error));
	}, []);

	return (
		<main className="App">
			{data
				? data.map((item) => (
						<div key={item.guid}>
							<h2>{item.title}</h2>
							<p>{item.contentSnippet}</p>
						</div>
				  ))
				: "Loading..."}
		</main>
	);
}

export default App;
