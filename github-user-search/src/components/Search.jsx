import { useState } from "react";
import { fetchUsers } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError("Please enter a username");
      setUsers([]);
      return;
    }

    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const data = await fetchUsers(username, location, minRepos);
      if (data.total_count === 0) {
        setError("Looks like we can't find the user");
        setUsers([]);
      } else {
        setUsers(data.items);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      setUsers([]);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          GitHub User Advanced Search
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div>
            <label className="block font-medium mb-1" htmlFor="username">
              Username (required)
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter GitHub username"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1" htmlFor="location">
              Location (optional)
            </label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Filter by location"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-medium mb-1" htmlFor="minRepos">
              Minimum Repositories (optional)
            </label>
            <input
              id="minRepos"
              type="number"
              min="0"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              placeholder="Filter by minimum repos count"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Search
          </button>
        </form>

        {loading && <p className="text-center text-gray-500">Loading...</p>}

        {error && !loading && (
          <p className="text-center text-red-500 font-semibold">{error}</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold text-center">
                {user.login}
              </h2>
              {user.location && (
                <p className="text-center text-gray-600">
                  Location: {user.location}
                </p>
              )}
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 text-center text-blue-600 hover:underline"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
