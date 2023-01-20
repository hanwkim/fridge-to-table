import './RecipeCard.scss';

export default function RecipeCard({ recipe }) {

    return (
        <div className="card">
            <img className="card__image" src={recipe.strMealThumb}></img>
            <span className="card__title">{recipe.strMeal}</span>
        </div>
    )
}