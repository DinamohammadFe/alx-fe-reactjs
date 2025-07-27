import { useState } from "react";
import { useRecipeStore } from "../recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

<<<<<<< HEAD
  const handleSubmit = (event) => {
    event.preventDefault();
=======
  const handleSubmit = (e) => {
    e.preventDefault();
>>>>>>> 1c46259c63bf2d1c53f01c0b50f0a2e85bb51928
    if (!title || !description) return;
    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
=======
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Recipe Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
>>>>>>> 1c46259c63bf2d1c53f01c0b50f0a2e85bb51928
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
