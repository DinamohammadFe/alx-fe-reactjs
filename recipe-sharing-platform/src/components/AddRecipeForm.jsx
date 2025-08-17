import React, { useState } from "react";

const AddRecipeForm = ({ addRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // ✅ errors state

  // ✅ validation function
  const validate = () => {
    let newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) newErrors.steps = "Steps are required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(); // ✅ use validate
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // ✅ update errors
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients,
      steps,
    };

    addRecipe(newRecipe);
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded"
    >
      <h2 className="text-xl font-bold mb-4">Add New Recipe</h2>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      <div className="mb-3">
        <textarea
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border p-2 rounded"
        />
        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}
      </div>

      <div className="mb-3">
        <textarea
          placeholder="Steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full border p-2 rounded"
        />
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
      </div>

      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
