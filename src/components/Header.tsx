import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="bg-white h-20">
        <nav className="h-full flex justify-between container items-center">
          <div>
            <Link to="/" className="text-ct-dark-600 text-2xl font-semibold">
              React Template
            </Link>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link to="/" className="text-ct-dark-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/profile" className="text-ct-dark-600">
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
