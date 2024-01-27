import { NavLink, useNavigate } from "react-router-dom";
import useIsLogIn from "../../Hooks/useIsLogIn";
import logo from "../../assets/Logo/Logo2.png"

const Navbar = () => {
const user = useIsLogIn()
const navigate = useNavigate();


  const handleLogOut = () => {
    localStorage.removeItem('access')
    localStorage.removeItem('user')
    navigate('/')
  }
  return (
    <nav className="bg-gray-700 border-gray-200">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto py-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logo}
            className="w-16"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Stellar Dwellings
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {user?.name? <li className="text-white">
                {user.name}
            </li> : ''}
            <li className="text-white">|</li>
            <li>
              <NavLink
                to='/'
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            {user?.name && <li>
              <NavLink
              to='/dashboard'
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Dashboard
              </NavLink>
            </li>}
            {!user?.name ? <li>
              <NavLink
              to='/signIn'
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Sign In
              </NavLink>
            </li> : ''}
            <li>
              <NavLink
                to='/signUp'
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Sign Up
              </NavLink>
            </li>
            {user?.name && <li>
              <NavLink
              onClick={handleLogOut}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Log Out
              </NavLink>
            </li>}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
