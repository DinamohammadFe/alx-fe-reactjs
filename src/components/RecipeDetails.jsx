import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipeForm from "./EditRecipeForm";
import { useState } from "react";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <button onClick={() => setIsEditing(true)}>Edit</button>
      <DeleteRecipeButton recipeId={recipe.id} />
      <button onClick={() => navigate("/")}>Back</button>

      {isEditing && (
        <EditRecipeForm recipe={recipe} onClose={() => setIsEditing(false)} />
      )}
    </div>
  );
};

export default RecipeDetails;
