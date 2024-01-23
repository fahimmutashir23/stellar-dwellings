
const isLogin = localStorage.getItem('access')


const useIsLogIn = () => {
    const getUser = localStorage.getItem('user')
    const user = JSON.parse(getUser)
   
    
    if(isLogin){
        return user
    }
    return {user:false}
};

export default useIsLogIn;