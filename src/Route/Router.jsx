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


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children : [
            {
                path: "/",
                element: <Home /> 
            },
            {
                path: "/signUp",
                element: <SignUp /> 
            },
            {
                path: "/signIn",
                element: <SignIn /> 
            },
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
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