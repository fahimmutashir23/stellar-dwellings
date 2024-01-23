


const isLogin = localStorage.getItem('access')


const useIsLogIn = () => {
    if(isLogin){
        return {user: true}
    }
    return {user:false}

};

export default useIsLogIn;