import "./HomePage.scss";
import fridgeOpen from "../../assets/images/fridge-open.png";
import fridgeClosed from "../../assets/images/fridge-closed.png";
import RecipeCardHome from "../../components/RecipeCardHome/RecipeCardHome";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ingredients from "../../data/data.json";

export default function HomePage() {
	const BASE_API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";
	const [recipeList, setRecipeList] = useState(null);
	const [ingredientList, setIngredientList] = useState(null);

	function clickHandler() {
		let randomArray = [];

		let randomNumber = Math.round(Math.random() * 14);
		let randomNumber2 = Math.round(Math.random() * 14);
		let randomNumber3 = Math.round(Math.random() * 14);

		let randomIngredients = [
			ingredients[randomNumber],
			ingredients[randomNumber2],
			ingredients[randomNumber3],
		];

		setIngredientList(randomIngredients);

		console.log(randomIngredients);

		axios.get(BASE_API_URL).then(({ data }) => {
			let recipeObject = {
				strMeal: data.meals[0].strMeal,
				strMealThumb: data.meals[0].strMealThumb,
				idMeal: data.meals[0].idMeal,
			};
			randomArray.push(recipeObject);

			axios.get(BASE_API_URL).then(({ data }) => {
				let recipeObject = {
					strMeal: data.meals[0].strMeal,
					strMealThumb: data.meals[0].strMealThumb,
					idMeal: data.meals[0].idMeal,
				};
				randomArray.push(recipeObject);

				axios.get(BASE_API_URL).then(({ data }) => {
					let recipeObject = {
						strMeal: data.meals[0].strMeal,
						strMealThumb: data.meals[0].strMealThumb,
						idMeal: data.meals[0].idMeal,
					};
					randomArray.push(recipeObject);
					setRecipeList(randomArray);
				});
			});
		});
	}

	return (
		<main className="main">
			<section className="main__container">
				<div className="main__ingredients">
					{ingredientList &&
						ingredientList.map((ingredient) => {
							return (
								<Link to={`/recipes?i=${ingredient.name}`}>
									<div className="ingredient">
										<img
											className="ingredient__image"
											src={ingredient.src}
										></img>
										<span>{ingredient.name}</span>
									</div>
								</Link>
							);
						})}
				</div>
				<div className="main__image-container">
					<img
						onClick={clickHandler}
						src={ingredientList ? fridgeOpen : fridgeClosed}
						className="main__image"
					></img>
				</div>
				<div className="main__recipes">
					{recipeList &&
						recipeList.map((recipe) => {
							return (
								<Link
									key={recipe.idMeal}
									to={`/recipes/${recipe.idMeal}`}
								>
									<RecipeCardHome recipe={recipe} />
								</Link>
							);
						})}
				</div>
			</section>
			{!recipeList && (
				<p className="main__placeholder">
					Click The Fridge For Some Suggested Recipes!
				</p>
			)}
		</main>
	);
}
