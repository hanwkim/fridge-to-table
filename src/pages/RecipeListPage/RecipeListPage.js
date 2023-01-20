import axios from 'axios';
import { useEffect, useState } from 'react';
import './RecipeListPage.scss';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { Link } from 'react-router-dom';

export default function RecipeListPage() {
    const [recipeList, setRecipeList] = useState(null);
    const BASE_API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";

    useEffect(() => {
        try {
            async function getRecipeList() {
                const { data } = await axios.get(BASE_API_URL);
                setRecipeList(data.meals);
            }
            getRecipeList();
        } catch(error) {
            console.log(error);
        }
    }, [])

    return (
        <section className="list-page">
            {recipeList && recipeList.map((recipe) => {
                return (
                <Link to={`/recipes/${recipe.idMeal}`} >
                    <RecipeCard recipe={recipe} />
                </Link>)
            })}
        </section>
    )
}