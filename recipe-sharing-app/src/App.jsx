import { Routes, Route, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Recipe Sharing App
        </h1>
        <nav className="bg-white shadow rounded-lg p-4">
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Home
          </Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <div className="space-y-6">
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
              </div>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
