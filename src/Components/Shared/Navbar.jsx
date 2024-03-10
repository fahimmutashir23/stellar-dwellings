import { Link, NavLink, useNavigate } from "react-router-dom";
import useIsLogIn from "../../Hooks/useIsLogIn";
import logoImage from "../../assets/Logo/Logo2.png";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const user = useIsLogIn();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <nav
      data-aos="fade-down"
      data-aos-duration="3000"
      id="nav_bar"
      className="bg-gray-700 border-gray-200 sticky top-0 z-50 shadow-xl"
    >
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto py-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logoImage} className="w-16" alt="stellar Dwellings Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Stellar Dwellings
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {user?.name ? <li className="text-white">{user.name}</li> : ""}
            <li className="text-white">|</li>
            <li>
              <NavLink
                to="/"
                className="py-2 px-3 items-center text-white rounded md:hover:text-[#e33226] md:p-0 transition-all duration-300 group"
                aria-current="page"
              >
                Home
                <div className="h-[1.5px] w-0 group-hover:w-full transition-all duration-300 bg-white"></div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="py-2 px-3 items-center text-white rounded md:hover:text-[#e33226] md:p-0 transition-all duration-300 group"
                aria-current="page"
              >
                Career
                <div className="h-[1.5px] w-0 group-hover:w-full transition-all duration-300 bg-white"></div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="py-2 px-3 items-center text-white rounded md:hover:text-[#e33226] md:p-0 transition-all duration-300 group"
                aria-current="page"
              >
                Contact
                <div className="h-[1.5px] w-0 group-hover:w-full transition-all duration-300 bg-white"></div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="py-2 px-3 items-center text-white rounded md:hover:text-[#e33226] md:p-0 transition-all duration-300 group"
                aria-current="page"
              >
                About
                <div className="h-[1.5px] w-0 group-hover:w-full transition-all duration-300 bg-white"></div>
              </NavLink>
            </li>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-8 h-8 rounded-full bg-[#e33226]">
                  <FaUserCircle className="text-white w-8 h-8" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content mt-3 z-[1] p-2 shadow bg-gray-700 rounded-md w-40 space-y-2"
              >
                {user?.name && (
                  <li>
                    <NavLink
                      to="/dashboard"
                      className="py-2 px-3 flex flex-col items-end text-white rounded md:hover:text-[#e33226] md:p-0 transition-all duration-300 group"
                    >
                      Dashboard
                      <div className="h-[1.5px] w-0 group-hover:w-full transition-all duration-300 bg-white"></div>
                    </NavLink>
                  </li>
                )}
                {!user?.name ? (
                  <li>
                    <NavLink
                      to="/signIn"
                      className="py-2 px-3 flex flex-col items-end text-white rounded md:hover:text-violet-400 md:p-0 transition-all duration-300 group"
                    >
                      Sign In
                      <div className="h-[1.5px] w-0 group-hover:w-full transition-all duration-300 bg-white"></div>
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}
                <li>
                  <NavLink
                    to="/signUp"
                    className="py-2 px-3 flex flex-col items-end text-white rounded md:hover:text-violet-400 md:p-0 transition-all duration-300 group"
                  >
                    Sign Up
                    <div className="h-[1.5px] w-0 group-hover:w-full transition-all duration-300 bg-white"></div>
                  </NavLink>
                </li>
                {user?.name && (
                  <li>
                    <NavLink
                      onClick={handleLogOut}
                      className="py-2 px-3 flex flex-col items-end text-white rounded md:hover:text-violet-400 md:p-0 transition-all duration-300 group"
                    >
                      Log Out
                      <div className="h-[1.5px] w-0 group-hover:w-full transition-all duration-300 bg-white"></div>
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
