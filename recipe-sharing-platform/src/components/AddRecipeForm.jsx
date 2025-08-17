// src/components/AddRecipeForm.jsx
import React, { useState } from "react";

const AddRecipeForm = ({ addRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};
    if (!title) formErrors.title = "Title is required";
    if (!ingredients) formErrors.ingredients = "Ingredients are required";
    if (!instructions) formErrors.instructions = "Instructions are required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      addRecipe({ title, ingredients, instructions });
      setTitle("");
      setIngredients("");
      setInstructions("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-white shadow-md rounded">
      <div>
        <label className="block">Title</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}  {/* ✅ event.target.value */}
          className="border p-2 w-full"
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}
      </div>

      <div>
        <label className="block">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(event) => setIngredients(event.target.value)} {/* ✅ event.target.value */}
          className="border p-2 w-full"
        />
        {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>}
      </div>

      <div>
        <label className="block">Instructions</label>
        <textarea
          value={instructions}
          onChange={(event) => setInstructions(event.target.value)} {/* ✅ event.target.value */}
          className="border p-2 w-full"
        />
        {errors.instructions && <p className="text-red-500">{errors.instructions}</p>}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
