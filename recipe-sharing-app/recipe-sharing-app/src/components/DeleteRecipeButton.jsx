import useRecipeStore from "./recipeStore"; // relative path from components folder

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return <button onClick={() => deleteRecipe(recipeId)}>Delete</button>;
};

export default DeleteRecipeButton;
