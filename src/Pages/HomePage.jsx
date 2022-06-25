import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Card from "../Components/Card/Card";
import { usePosts } from "../Hooks/usePosts";
import Layout from "../Layout/Layout";
import { fetchPostsRequest } from "../Redux/modules/posts/postsActions";

function HomePage() {
  const { posts, loading, error } = usePosts();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);

  return (
    <Layout>
      <main
        className={`min-h-screen bg-white ${
          !posts || loading || error
            ? "flex-center"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        }`}
      >
        {loading ? (
          <p className="text-3xl">Loading...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : posts && posts.length > 0 ? (
          posts.map((post) => <Card key={post.id} post={post} />)
        ) : (
          <p>posts is empty</p>
        )}
      </main>
    </Layout>
  );
}

export default HomePage;
