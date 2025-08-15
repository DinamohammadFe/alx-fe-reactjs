import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  // Show filtered recipes if search is active, otherwise show all
  const recipes = useRecipeStore((state) =>
    state.filteredRecipes.length ? state.filteredRecipes : state.recipes
  );

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          {/* Clicking the title navigates to the recipe details page */}
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
