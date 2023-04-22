const Card = ({ booksArray }) => {
	return booksArray.map(({ id, volumeInfo }) => (
		<div className="card mb-2" key={id}>
			<div className="card-header">
				<h5 className="mb-0">
					<button
						className="btn btn-link collapsed"
						data-toggle="collapse"
						data-target={`#${id}`}
						aria-expanded="false"
					>
						{volumeInfo.title}
					</button>
				</h5>
			</div>
			<div id={id} className="collapse" data-parent="#accordion">
				<div className="card-body">
					{volumeInfo.hasOwnProperty("imageLinks") && (
						<img src={volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title} />
					)}
					<br />
					<h4 className="card-title">Titre: {volumeInfo.title}</h4>
					<h5 className="card-title">Auteurs: {volumeInfo.authors}</h5>
					<p className="card-text">
						Description:{" "}
						{volumeInfo.hasOwnProperty("description") && volumeInfo.description}
					</p>
					<a
						className="btn btn-outline-secondary"
						target="_blank"
						rel="noopener noreferrer"
						href={volumeInfo.previewLink}
					>
						Plus d'infos
					</a>
					<button className="btn btn-outline-info ml-3" onClick={() => {}}>
						Enregistrer
					</button>
				</div>
			</div>
		</div>
	));
};

export default Card;
