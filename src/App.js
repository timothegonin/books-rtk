import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LibraryView from "./features/library/LibraryView";
import FetchBooksView from "./features/fetchBooks/FetchBooksView";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<LibraryView />} />
				<Route path="/search" element={<FetchBooksView />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
