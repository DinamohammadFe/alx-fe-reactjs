import axios from "axios";

export const fetchUserData = async ({ query, location, minRepos }) => {
  let searchQuery = query || "";
  if (location) searchQuery += ` location:${location}`;
  if (minRepos) searchQuery += ` repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    searchQuery
  )}`;

  try {
    const response = await axios.get(url);
    return response.data; // contains `items` array of users
  } catch (error) {
    throw new Error("Failed to fetch user data");
  }
};
