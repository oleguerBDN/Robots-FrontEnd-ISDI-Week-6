import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

function Header() {
  const { user } = useUser();

  return (
    <>
      <ul className="flex border-b">
        <li className="mr-1">
          <Link
            to={user.isAuthenticated ? "form" : "#"}
            className={
              user.isAuthenticated
                ? "inline-block px-4 py-2 font-semibold text-blue-500 bg-white hover:text-blue-800"
                : "inline-block px-4 py-2 font-semibold text-gray-400 bg-white   cursor-not-allowed"
            }
          >
            FORM
          </Link>
        </li>
        <li className="mr-1">
          <Link
            to="robots"
            className="inline-block px-4 py-2 font-semibold text-blue-500 bg-white hover:text-blue-800"
          >
            ROBOTS
          </Link>
        </li>
        <li className="mr-1">
          <Link
            to={user.isAuthenticated ? "logout" : "login"}
            className="inline-block px-4 py-2 font-semibold text-blue-500 bg-white hover:text-blue-800"
          >
            {user.isAuthenticated ? "LOGOUT" : "LOGIN"}
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Header;
