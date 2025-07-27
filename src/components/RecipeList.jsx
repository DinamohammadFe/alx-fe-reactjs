<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> 1c46259c63bf2d1c53f01c0b50f0a2e85bb51928
import { useRecipeStore } from "../recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
<<<<<<< HEAD
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
=======
      <h2>All Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      )}
>>>>>>> 1c46259c63bf2d1c53f01c0b50f0a2e85bb51928
    </div>
  );
};

export default RecipeList;
