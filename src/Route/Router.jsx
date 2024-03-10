import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import DashboardLayout from "../Layouts/DashboardLayout";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import MainContent from "../Pages/Dashboard/MainContent/MainContent";
import MyBookings from "../Pages/Dashboard/MyBookings/MyBookings";
import AllBookings from "../Pages/AllBookings/AllBookings";
import AddHouse from "../Pages/AddHouse/AddHouse";
import AllHouses from "../Pages/AllHouses/AllHouses";
import UpdateHouse from "../Utils/UpdateHouse/UpdateHouse";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import BookingPage from "../Pages/Home/BookingPage";
import ErrorPage from "../Utils/ErrorPage/ErrorPage";
import AllHouse from "../Pages/AllHouse/AllHouse";
import About from "../Pages/Home/About/About";
import Contact from "../Components/HomeSection/Contact/Contact";
import HouseCardDetails from "../Pages/Home/About/HouseCardDetails";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children : [
            {
                path: "/",
                element: <Home /> 
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path: "/signUp",
                element: <SignUp /> 
            },
            {
                path: "/signIn",
                element: <SignIn /> 
            },
            {
                path: "/bookingsPage/:id",
                element: <PrivetRoute><BookingPage /> </PrivetRoute>
            },
            {
                path: "/allHouse",
                element: <AllHouse />
            },
            {
                path:"/houseDetail/:id",
                element:<HouseCardDetails/>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivetRoute><DashboardLayout /></PrivetRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MainContent />
            },
            {
                path: '/dashboard/myBookings',
                element: <MyBookings />
            },
            {
                path: '/dashboard/allBookings',
                element: <AllBookings />
            },
            {
                path: '/dashboard/addHouse',
                element: <AddHouse />
            },
            {
                path: '/dashboard/allHouses',
                element: <AllHouses />
            },
            {
                path: '/dashboard/updateHouse/:id',
                element: <UpdateHouse />
            },
        ]
    }
])

export default Router;