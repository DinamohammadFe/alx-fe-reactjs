import React, { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required!");
      return;
    }

    // Extra check: at least 2 ingredients
    const ingredientList = ingredients.split(",").map((i) => i.trim());
    if (ingredientList.length < 2) {
      setError("Please enter at least two ingredients, separated by commas.");
      return;
    }

    // Add recipe
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredientList,
      instructions: steps,
    };

    onAddRecipe(newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Add New Recipe
      </h2>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Title Input */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter recipe title"
        />
      </div>

      {/* Ingredients Input */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Ingredients (comma separated)
        </label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          placeholder="e.g. Sugar, Flour, Eggs"
          rows="3"
        ></textarea>
      </div>

      {/* Steps Input */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Preparation Steps
        </label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          placeholder="Describe the preparation steps..."
          rows="4"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
