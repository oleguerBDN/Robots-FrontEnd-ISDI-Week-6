import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <ul className="flex border-b">
        <li className="mr-1">
          <Link
            to="form"
            className="inline-block px-4 py-2 font-semibold text-blue-500 bg-white hover:text-blue-800"
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
      </ul>
    </>
  );
}

export default Header;