import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import { fetchBooks as fetchBooksAsyncAction } from "./fetchBooksSlice";
import Spinner from "../../common/Spinner";
import Alerts from "../../common/Alerts";
import Card from "../../common/Card";

const FetchBooksView = () => {
	const dispatch = useDispatch();
	const booksSliceData = useSelector((state) => state.search);

	const [title, setTitle] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(fetchBooksAsyncAction(title));
	};

	return (
		<>
			<Jumbotron subtitle="Indiquez le sujet de votre livre à rechercher sur Google">
				<form
					className="form-inline justify-content-center"
					onSubmit={handleSubmit}
				>
					<div className="form-group">
						<input
							type="text"
							value={title}
							className="form-control"
							placeholder="Quoi rechercher ?"
							required
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<button className="btn btn-warning ml-3">Rechercher</button>
					</div>
				</form>
			</Jumbotron>
			<main className="container">
				<div className="accordion">
					{booksSliceData.isLoading ? (
						<Spinner />
					) : booksSliceData.error !== "" ? (
						<Alerts>{booksSliceData.error}</Alerts>
					) : (
						<Card booksArray={booksSliceData.fetchedBooks} />
					)}
				</div>
			</main>
		</>
	);
};

export default FetchBooksView;
