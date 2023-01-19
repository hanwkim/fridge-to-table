import "./RecipePage.scss";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RecipePage() {
	const [recipe, setRecipe] = useState(null);

	useEffect(() => {
		try {
			async function getRecipe() {
				const { data } = await axios.get(
					"http://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
				);
				console.log(data.meals[0]);
				setRecipe(data.meals[0]);
			}
			getRecipe();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<section className="recipe-page">
			<h3 className="recipe-page__title">Spicy Arrabiata Penne</h3>
			<img
				className="recipe-page__image"
				src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
			></img>
			<h4 className="recipe-page__header">Ingredients</h4>
			<ul className="recipe-page__list">
				<li className="recipe-page__list-item">
					<span>1 pound </span>
					<span>penne rigate</span>
				</li>
				<li className="recipe-page__list-item">
					<span>1/4 cup </span>
					<span>olive oil</span>
				</li>
			</ul>
			<p className="recipe-page__instructions">
				Bring a large pot of water to a boil. Add kosher salt to the
				boiling water, then add the pasta. Cook according to the package
				instructions, about 9 minutes. In a large skillet over
				medium-high heat, add the olive oil and heat until the oil
				starts to shimmer. Add the garlic and cook, stirring, until
				fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile
				flakes, Italian seasoning and salt and pepper to taste. Bring to
				a boil and cook for 5 minutes. Remove from the heat and add the
				chopped basil. Drain the pasta and add it to the sauce.
				Garnish with Parmigiano-Reggiano flakes and more basil and serve
				warm.
			</p>
		</section>
	);
}
