import { useParams, Link } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
const PostPage = () => {
  const { id } = useParams();
  const { loading, data, error } = useFetchData(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  console.log(data);
  return (
    <>
      {/* {loading && <p>Loading...</p>} */}
      {error && <p>{error}</p>}
      {data && (
        <article>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit</Link>
        </article>
      )}
    </>
  );
};
export { PostPage };
