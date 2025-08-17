import AddRecipeForm from "./components/AddRecipeForm";
import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <div className="p-6">
      <AddRecipeForm onAddRecipe={handleAddRecipe} />

      {/* Preview recipes */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">All Recipes</h2>
        <ul className="list-disc ml-6">
          {recipes.map((r) => (
            <li key={r.id}>
              <strong>{r.title}</strong> - {r.ingredients.join(", ")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
