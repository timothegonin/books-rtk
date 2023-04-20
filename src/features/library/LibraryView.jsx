import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import { addBook as addBookAction } from "./librarySlice";
import List from "../../common/List";

const LibraryView = () => {
	const libraryData = useSelector((state) => state.library.books);
	const dispatch = useDispatch();

	const initialState = {
		title: "",
		author: "",
	};

	const [newData, setNewData] = useState(initialState);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addBookAction(newData));
		setNewData(initialState);
	};

	return (
		<>
			<Jumbotron subtitle="Ajouter un livre à votre Bibliothèque">
				<form onSubmit={handleSubmit}>
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-4 m-2">
								<input
									type="text"
									value={newData.title}
									className="form-control"
									placeholder="Titre"
									required
									onChange={(e) =>
										setNewData({ ...newData, title: e.target.value })
									}
								/>
							</div>
							<div className="col-lg-4 m-2">
								<input
									type="text"
									value={newData.author}
									className="form-control"
									placeholder="Auteur"
									required
									onChange={(e) =>
										setNewData({ ...newData, author: e.target.value })
									}
								/>
							</div>
						</div>
						<div className="justify-content-center mt-2">
							<button className="btn btn-warning">Ajouter un livre</button>
						</div>
					</div>
				</form>
			</Jumbotron>
			<main className="container">
				<List data={libraryData} />
			</main>
		</>
	);
};

export default LibraryView;
