function Header() {
	return (
		<div className="container">
			<header>
				<a href="/" className="btn btn-primary">Home</a>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="/board" className="btn btn-primary">Board</a>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="/" className="btn btn-primary">Login</a>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="/" className="btn btn-primary">Customer</a>
			</header>
			<hr />
		</div>
	);
}

export default Header;
