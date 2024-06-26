import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

const Home = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="hero m-10 bg-base-200 rounded">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            This page was created to try to help you focus , some feture might
            be lacking so sorry for that, currently just go to app on top right
            to see what application i'm currently having
          </p>

          {!authUser && (
            <button className="btn btn-primary">
              <Link to={"/login"}>Sign in</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
