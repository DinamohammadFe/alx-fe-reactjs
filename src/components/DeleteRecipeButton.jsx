import { useRecipeStore } from "../recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button
      onClick={() => {
        if (confirm("Are you sure you want to delete this recipe?")) {
          deleteRecipe(recipeId);
        }
      }}
      style={{ marginLeft: "10px", color: "red" }}
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
