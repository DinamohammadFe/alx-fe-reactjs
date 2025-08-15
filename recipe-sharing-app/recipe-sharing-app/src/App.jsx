// src/App.jsx
import React from "react";
import SearchBar from "./components/SearchBar";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "16px" }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <SearchBar />
      <RecipeList />
    </div>
  );
}

export default App;
