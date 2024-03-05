import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
	const [podcast, setPodcast] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		async function fetchData() {
			const response = await axios.get("/sysk");
			setPodcast(response.data);
			setLoading(false);
			console.log(
				"Fetched and parsed RSS feed:client:",
				response.data.meta.title
			);
		}
		fetchData();
	}, []);
	
	if (loading) {
		return <div>Loading...</div>;
	}
	console.log([podcast]);

	return (
		<>
			<h1>{podcast.meta.title}</h1>
			<p>{podcast.meta.description}</p>
			<p>{podcast.meta.author}</p>
			<p>{podcast.meta.author}</p>
			<p>{podcast.meta.link}</p>

			{podcast.episodes.map((episode, idx) => (
				<div key={idx}>
					<h3>{episode.title}</h3>
					<p>{episode.description}</p>
					<p>{episode.enclosure.url}</p>
					<p>{episode.enclosure.length}</p>
					<p>{episode.enclosure.type}</p>
					<p>{episode.guid}</p>
					<p>{episode.pubDate}</p>
				</div>
			))}
		</>
	);
}

export default App;
