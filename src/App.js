import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<Navbar />
			<Jumbotron />
			<Footer />
		</Router>
	);
}

export default App;
