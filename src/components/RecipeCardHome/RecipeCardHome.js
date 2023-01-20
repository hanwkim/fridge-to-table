import './RecipeCardHome.scss';

export default function RecipeCardHome({ recipe }) {

    return (
        <div className="card-home">
            <img className="card-home__image" src={recipe.strMealThumb}></img>
            <span className="card-home__title">{recipe.strMeal}</span>
        </div>
    )
}