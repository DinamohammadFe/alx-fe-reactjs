import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

export default function PostsComponent() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000,
    cacheTime: 1000 * 60 * 5,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      <button
        onClick={() => refetch()}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Refetch Posts
      </button>
      <ul className="list-disc pl-6">
        {data.slice(0, 5).map((post) => (
          <li key={post.id} className="mb-2">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
