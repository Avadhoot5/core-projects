import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {

    const { dispatch } = useAuthContext();

    const logout = () => {
        // clearing the user token
        localStorage.removeItem('user');
        
        // updating the auth state
        dispatch({type: 'LOGOUT'})
    }
    return {logout};
    
}