import React from "react";
import { useDispatch } from "react-redux";
import { deleteAllBooks as deleteBooksAction } from "../features/library/librarySlice";

const DeleteAllBtn = () => {
	const dispatch = useDispatch();

	return (
		<div className="d-flex justify-content-center mb-5">
			<button
				className="btn btn-danger mt-4 mb-5"
				onClick={() => dispatch(deleteBooksAction())}
			>
				Effacer tous les livres
			</button>
		</div>
	);
};

export default DeleteAllBtn;
