/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import toast from "react-hot-toast";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const Provider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const [errorMsg, setErrorMsg] = useState("");


  const login = async (email, password) => {
    setLoading(true);
    const res = await axiosPublic(`/auth?email=${email}&password=${password}`);
    
    if (res.data.message === "success") {
      const user = {name: res.data.user.name, email: res.data.user.email}
      localStorage.setItem('user', JSON.stringify(user))
      setLoading(false)
      setErrorMsg("");
      toast.success(`Login Successfully`, {
        style: {
          backgroundColor: "#00c04b",
          color: "white",
          borderRadius: "4px",
          padding: "4px 2rem",
        },
      });

      axiosPublic.post("/jwt", { email: email }).then((res) => {
        if (res.data.token) {
          localStorage.setItem("access", res.data.token);
        } else {
          localStorage.removeItem("access");
        }
      });
    }
    if (res.data.message === "failed") {
      setErrorMsg("Email and Password are incorrect.");
    }
  };

  const authInfo = {loading, login, errorMsg };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Provider;
