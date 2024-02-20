import useFetchData from "../hooks/useFetchData";
import { Link, useLocation } from "react-router-dom";

const BlogPage = () => {
  const {
    loading,
    error,
    data: posts,
  } = useFetchData("https://jsonplaceholder.typicode.com/posts");

  const { pathname } = useLocation();
  return (
    <div>
      <h1>Blog Page</h1>
      <Link to="/posts/add">Add new post</Link>
      <ul>
        {/* {loading && <p>Loading...</p>} */}
        {error && <p>{error}</p>}
        {posts &&
          posts.map((post) => (
            <Link key={post.id} to={`${pathname}/${post.id}`}>
              <li>{post.title}</li>
            </Link>
          ))}
      </ul>
    </div>
  );
};
export default BlogPage;
