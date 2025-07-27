<<<<<<< HEAD
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
=======
import { Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
>>>>>>> 1c46259c63bf2d1c53f01c0b50f0a2e85bb51928

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Recipe Sharing App</h1>
<<<<<<< HEAD
      <AddRecipeForm />
      <RecipeList />
=======
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
>>>>>>> 1c46259c63bf2d1c53f01c0b50f0a2e85bb51928
    </div>
  );
}

export default App;
