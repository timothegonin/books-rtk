import { useState } from "react";
import Jumbotron from "../../components/Jumbotron";

const FetchBooksView = () => {
	const [title, setTitle] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
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
		</>
	);
};

export default FetchBooksView;
