import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import DashboardLayout from "../Layouts/DashboardLayout";
import AdminContent from "../Pages/Dashboard/MainContent/AdminContent/AdminContent";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children : [
            {
                path: "/",
                element: <Home /> 
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <AdminContent />
            }
        ]
    }
])

export default Router;