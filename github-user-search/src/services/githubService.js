import axios from "axios";

/**
 * Fetch users from GitHub API based on search criteria.
 * @param {string} username - GitHub username query (required)
 * @param {string} location - Location filter (optional)
 * @param {string|number} minRepos - Minimum number of repositories filter (optional)
 * @returns {Promise<Object>} - Promise resolving to GitHub API search result data
 */
export async function fetchUsers(username, location, minRepos) {
  // Build the query string for GitHub Search API
  // Example: "john+location:Egypt+repos:>10"
  let query = `${username}`;

  if (location && location.trim() !== "") {
    query += `+location:${location.trim()}`;
  }

  if (minRepos && Number(minRepos) > 0) {
    query += `+repos:>=${minRepos}`;
  }

  // Full endpoint URL
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query
  )}`;

  try {
    const response = await axios.get(url);
    return response.data; // contains total_count and items (array of users)
  } catch (error) {
    console.error("Error fetching users from GitHub API:", error);
    throw error;
  }
}
