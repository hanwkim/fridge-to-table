import axios from 'axios';
import { useEffect, useState } from 'react';
import './RecipeListPage.scss';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { Link, useSearchParams } from 'react-router-dom';

export default function RecipeListPage() {
    const [recipeList, setRecipeList] = useState(null);
    const [searchParams] = useSearchParams();

    let urlQuery = searchParams.get('i');

    const BASE_API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php";

    useEffect(() => {
        try {
            async function getRecipeList() {
                const { data } = await axios.get(`${BASE_API_URL}?i=${urlQuery}`);
                setRecipeList(data.meals);
            }
            getRecipeList();
        } catch(error) {
            console.log(error);
        }
    }, [urlQuery])

    return (
        <section className="list-page">
            {recipeList && recipeList.map((recipe) => {
                return (
                <Link className="list-page__link" key={recipe.idMeal} to={`/recipes/${recipe.idMeal}`} >
                    <RecipeCard recipe={recipe} />
                </Link>)
            })}
        </section>
    )
}