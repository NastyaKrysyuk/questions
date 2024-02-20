import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const CreatePostPage = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <h1>Create Page</h1>
      <button onClick={() => signout(() => navigate("/", { replace: true }))}>
        Log out
      </button>
    </>
  );
};
export { CreatePostPage };
