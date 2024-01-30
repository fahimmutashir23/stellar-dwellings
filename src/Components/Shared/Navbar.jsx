import { Link, NavLink, useNavigate } from "react-router-dom";
import useIsLogIn from "../../Hooks/useIsLogIn";
import logoImage from '../../assets/Logo/Logo2.png';


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
        <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logoImage}
            className="w-16"
            alt="stellar Dwellings Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Stellar Dwellings
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {user?.name? <li className="text-violet-400">
                {user.name}
            </li> : ''}
            <li className="text-white">|</li>
            <li>
              <NavLink
                to='/'
                className="py-2 px-3 items-center text-white rounded md:hover:text-violet-400 md:p-0 transition-all duration-300 group"
                aria-current="page"
              >
                Home
                <div className="h-[1.5px] w-0 group-hover:w-full transition-all duration-300 bg-white"></div>
              </NavLink>
            </li>
            {user?.name && <li>
              <NavLink
              to='/dashboard'
                className="py-2 px-3 flex flex-col items-center text-white rounded md:hover:text-violet-400 md:p-0 transition-all duration-300 group"
              >
                Dashboard
                <div className="h-[1.5px] w-0 group-hover:w-full transition-all duration-300 bg-white"></div>
              </NavLink>
            </li>}
            {!user?.name ? <li>
              <NavLink
              to='/signIn'
                className="py-2 px-3 flex flex-col items-center text-white rounded md:hover:text-violet-400 md:p-0 transition-all duration-300 group"
              >
                Sign In
                <div className="h-[1.5px] w-0 group-hover:w-full transition-all duration-300 bg-white"></div>
              </NavLink>
            </li> : ''}
            <li>
              <NavLink
                to='/signUp'
                className="py-2 px-3 flex flex-col items-center text-white rounded md:hover:text-violet-400 md:p-0 transition-all duration-300 group"
              >
                Sign Up
                <div className="h-[1.5px] w-0 group-hover:w-full transition-all duration-300 bg-white"></div>
              </NavLink>
            </li>
            {user?.name && <li>
              <NavLink
              onClick={handleLogOut}
                className="py-2 px-3 flex flex-col items-end text-white rounded md:hover:text-violet-400 md:p-0 transition-all duration-300 group"
              >
                Log Out
                <div className="h-[1.5px] w-0 group-hover:w-full transition-all duration-300 bg-white"></div>
              </NavLink>
            </li>}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
