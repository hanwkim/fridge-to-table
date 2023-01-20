import "./Recipe.scss";
import { v4 as uuid } from "uuid";

export default function Recipe({ recipe }) {
	let ingredientArray = [];

	for (let i = 1; i <= 20; i++) {
		if (recipe[`strIngredient${i}`]) {
			ingredientArray.push(
				recipe[`strMeasure${i}`] + " " + recipe[`strIngredient${i}`]
			);
		}
	}

	let splitUrl = recipe.strYoutube.split("=");
	let youtubeTag = splitUrl[1];

	return (
		<>
			<h3 className="recipe__title">{recipe.strMeal}</h3>
			<img className="recipe__image" src={recipe.strMealThumb}></img>
			<h4 className="recipe__header">Ingredients</h4>
			<ul className="recipe__list">
				{ingredientArray.map((ingredient) => {
					return (
						<li key={uuid()} className="recipe__list-item">
							{ingredient}
						</li>
					);
				})}
			</ul>
			<p className="recipe__instructions">{recipe.strInstructions}</p>
			<iframe
				width="420"
				height="315"
				src={`https://www.youtube.com/embed/${youtubeTag}`}
			></iframe>
		</>
	);
}
