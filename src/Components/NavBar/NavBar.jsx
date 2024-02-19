import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
	const location = useLocation();
	
	return (
		<>
			<p>Navbar</p>
		</>
	);
}
