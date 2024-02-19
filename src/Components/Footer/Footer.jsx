import "./Footer.css";
// import Container from "react-bootstrap/Container";
// import { Link } from "react-router-dom";
// import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
	return (
        <footer>
            {/* <Container fluid> */}
            {/* <div className="socials">
                            <a href="https://www.linkedin.com/in/zacharysmitchell/" target="_blank" rel="noreferrer">
                                <FaLinkedin className="social-icon" />
                            </a>
                            <a href="https://github.com/zacharyswanmitchell" target="_blank" rel="noreferrer">
                                <FaGithub className="social-icon" />
                            </a>
                </div> */}
                <div>
				<p>&copy; 2024 Zachary Swan Mitchell. All rights reserved.</p>
                </div>
                {/* <div className="links">
                    <Link to="/" className="footer-links">Home</Link>&nbsp; | &nbsp;
                    <Link to="/about" className="footer-links">About</Link>&nbsp; | &nbsp;
                    <Link to="/projects" className="footer-links">Projects</Link>&nbsp; | &nbsp;
                    <Link to="/contact" className="footer-links">Contact</Link>
                </div> */}
			{/* </Container> */}
		</footer>
	);
}
