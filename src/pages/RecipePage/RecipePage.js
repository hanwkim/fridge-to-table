import "./RecipePage.scss";
import axios from "axios";
import Recipe from "../../components/Recipe/Recipe";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipePage() {
	const [recipe, setRecipe] = useState(null);
    const BASE_API_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php"
    const { id } = useParams();

	useEffect(() => {
		try {
			async function getRecipe() {
				const { data } = await axios.get(`${BASE_API_URL}?i=${id}`);
				setRecipe(data.meals[0]);
			}
			getRecipe();
		} catch (error) {
			console.log(error);
		}
	}, [id]);

	return (
		<section className="recipe-page">
			{recipe && <Recipe recipe={recipe} />}
		</section>
	);
}
