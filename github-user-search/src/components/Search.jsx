import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!query.trim()) {
      setError("Please enter a username");
      setUsers([]);
      return;
    }

    setLoading(true);
    setError("");
    try {
      const data = await fetchUserData({ query, location, minRepos });
      if (data.items.length === 0) {
        setError("Looks like we can't find the user");
        setUsers([]);
      } else {
        setUsers(data.items);
      }
    } catch (err) {
      setError("Failed to fetch user data");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          GitHub User Search
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Location (optional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            type="number"
            min="0"
            placeholder="Minimum repositories (optional)"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg transition"
          >
            Search
          </button>
        </form>

        {loading && <p className="mt-4 text-center">Loading...</p>}

        {error && !loading && (
          <p className="mt-4 text-center text-red-500">{error}</p>
        )}

        {!loading && users.length > 0 && (
          <div className="mt-6 space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    {user.login}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
