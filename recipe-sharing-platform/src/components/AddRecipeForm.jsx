import React, { useState } from "react";

const AddRecipeForm = ({ addRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [steps, setSteps] = useState(""); // ✅ NEW field for steps

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !instructions || !steps) {
      alert("Please fill in all fields");
      return;
    }

    addRecipe({
      title,
      ingredients,
      instructions,
      steps, // ✅ include steps in recipe object
    });

    // reset form
    setTitle("");
    setIngredients("");
    setInstructions("");
    setSteps("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg">
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <textarea
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        className="w-full p-2 border rounded"
      />

      {/* ✅ New steps field */}
      <textarea
        placeholder="Steps"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
