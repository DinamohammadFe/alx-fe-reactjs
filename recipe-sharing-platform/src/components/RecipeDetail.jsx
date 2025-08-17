import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((r) => r.id === parseInt(id));
        setRecipe(found || null);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10">Loading recipe...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-block mb-6 text-blue-600 hover:underline">
        ← Back to Home
      </Link>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <section className="bg-gray-50 rounded-xl p-5">
              <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {Array.isArray(recipe.ingredients) &&
                recipe.ingredients.length > 0 ? (
                  recipe.ingredients.map((item, i) => <li key={i}>{item}</li>)
                ) : (
                  <li>No ingredients provided.</li>
                )}
              </ul>
            </section>

            <section className="bg-gray-50 rounded-xl p-5">
              <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                {Array.isArray(recipe.instructions) &&
                recipe.instructions.length > 0 ? (
                  recipe.instructions.map((step, i) => <li key={i}>{step}</li>)
                ) : (
                  <li>No instructions provided.</li>
                )}
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
