import React, { useState, useEffect, useCallback } from "react";

const InfiniteScrollClient = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}`
      );
      const newPosts = await response.json();
      setPosts((prevPosts) => [...prevPosts, ...newPosts]); // when newState is based on previous state, so passing previous state in argument to ensure we are working with most updated state
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  const onScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 30 &&
      !loading
    ) {
      fetchPosts();
    }
  }, [fetchPosts, loading]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    fetchPosts(); // Initial fetch when component mounts
  }, [fetchPosts]);

  return (
    <div>
      <h1>Infinite Scroll List</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScrollClient;
