/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useIsLogIn from "../Hooks/useIsLogIn";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const user = useIsLogIn()


    if(user?.email){
        return children
    }
    else{
        return (
            Swal.fire({
              title: "You are not Logged in",
              text: "Please Login first to use this service",
              icon: "warning",
              confirmButtonText: "Cool",
            }) && <Navigate to='/signIn'></Navigate>
          );
    }
};

export default PrivetRoute;