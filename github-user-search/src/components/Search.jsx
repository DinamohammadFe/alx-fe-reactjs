import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!query.trim()) {
      setError("Please enter a username");
      setUser(null);
      return;
    }

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(query);
      setUser(data);
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p className="text-red-600">{error}</p>}

      {user && (
        <div className="text-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 rounded-full mx-auto mb-2"
          />
          <h2 className="text-xl font-bold">{user.name || user.login}</h2>
          <p className="text-gray-600">@{user.login}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
