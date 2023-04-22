const Jumbotron = ({ subtitle, children }) => {
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container text-center">
				<h1 className="display-4">BOOKS</h1>
				<p>{subtitle}</p>
				{children}
			</div>
		</div>
	);
};

export default Jumbotron;
