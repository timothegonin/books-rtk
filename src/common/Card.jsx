const Card = ({ booksArray }) => {
	return booksArray.map(() => (
		<div className="card mb-2" key={}>
			<div className="card-header">
				<h5 className="mb-0">
					<button
						className="btn btn-link collapsed"
						data-toggle="collapse"
						data-target={`#${}`}
						aria-expanded="false"
					>
						{}
					</button>
				</h5>
			</div>
			<div id={} className="collapse" data-parent="#accordion">
				<div className="card-body">
					{}
					<br />
					<h4 className="card-title">Titre: {}</h4>
					<h5 className="card-title">Auteurs: {}</h5>
					<p className="card-text">
						Description: {}
					</p>
					<a
						className="btn btn-outline-secondary"
						target="_blank"
						rel="noopener noreferrer"
						href={}
					>
						Plus d'infos
					</a>
						<button
							className="btn btn-outline-info ml-3"
							onClick={() =>{}}
						>
							Enregistrer
						</button>
				</div>
			</div>
		</div>
	));
};

export default Card;
