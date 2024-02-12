import axios from "axios";


const axiosPublic = axios.create({
    baseURL: "http://localhost:5000"
    // baseURL: "https://stellar-dwellings-server.vercel.app"
})
const useAxiosPublic = () => {
    // axiosPublic.interceptors.request.use((config)=> {
    //     const token = localStorage.getItem('access')
    //     config.headers.authorization = `${token}`
    //     return config
    // }, error => {
    //     return Promise.reject(error)
    // })

    return axiosPublic
};

export default useAxiosPublic;