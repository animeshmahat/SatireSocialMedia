import FakePost from "./FakePost";
import { useState, useEffect } from "react";
import { generateFakePosts } from "../data/generateFakePosts";

export default function FakeFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/?results=5");
        if (!res.ok) throw new Error("Failed to fetch users.");
        const data = await res.json();
        const fakePosts = generateFakePosts(data.results);
        setPosts(fakePosts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-2xl mx-auto mt-8 space-y-6">
      {posts.map((post) => (
        <FakePost key={post.id} post={post} />
      ))}
    </div>
  );
}
