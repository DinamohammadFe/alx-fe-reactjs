import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Recipe Sharing App</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/add">Add Recipe</Link> |{" "}
            <Link to="/favorites">Favorites</Link> |{" "}
            <Link to="/recommendations">Recommendations</Link>
          </nav>
          <SearchBar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/add" element={<AddRecipeForm />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/favorites" element={<FavoritesList />} />
            <Route path="/recommendations" element={<RecommendationsList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
