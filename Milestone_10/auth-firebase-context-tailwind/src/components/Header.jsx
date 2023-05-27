import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(UserContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-primary text-primary-content">
      <a className="btn btn-ghost normal-case text-xl">Logo</a>
      <Link className="btn btn-ghost normal-case text-xl" to="/">
        Home
      </Link>
      <Link className="btn btn-ghost normal-case text-xl" to="/orders">
        Orders
      </Link>
      {user && (
        <Link className="btn btn-ghost normal-case text-xl" to="/profile">
          Profile
        </Link>
      )}
      <Link className="btn btn-ghost normal-case text-xl" to="/register">
        Register
      </Link>
      {user ? (
        <>
          <span>{user.email}</span>
          <button onClick={handleLogOut} className="btn btn-xs">
            Sign out
          </button>
        </>
      ) : (
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Header;
