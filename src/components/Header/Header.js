import { useNavigate } from 'react-router-dom';
import './Header.scss';

export default function Header() {
	const navigate = useNavigate();

	function submitHandler(event) {
		event.preventDefault();
		navigate(`/recipes?i=${event.target.search.value}`)
	}


	return (
		<header className="header">
			<h1 className="header__title">Fridge to Table</h1>
			<nav className="nav">
				<form onSubmit={submitHandler} className="nav__form">
					<input
						type="search"
						name="search"
						placeholder="What's in your fridge?"
						className="nav__input"
					></input>
					<button type="submit">Search</button>
				</form>
			</nav>
		</header>
	);
}
