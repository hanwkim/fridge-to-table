import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";

export default function Header() {
	const navigate = useNavigate();

	function submitHandler(event) {
		event.preventDefault();
		navigate(`/recipes?i=${event.target.search.value}`);
		event.target.reset();
	}

	return (
		<header className="header">
			<Link to="/" className="header__title">
				Fridge to Table
			</Link>
			<nav className="nav">
				<form onSubmit={submitHandler} className="nav__form">
					<input
						type="search"
						name="search"
						placeholder="What's in your fridge?"
						className="nav__input"
					></input>
					<button type="submit" className="nav__button">Search</button>
				</form>
			</nav>
		</header>
	);
}
