import { useAuthContext } from "./useAuthContext"
import { useWorkoutContext } from "./useWorkoutContext";

export const useLogout = () => {

    const { dispatch } = useAuthContext();
    const { dispatch: workoutDispatch } = useWorkoutContext();

    const logout = () => {
        // clearing the user token
        localStorage.removeItem('user');
        
        // updating the auth state
        dispatch({type: 'LOGOUT'})
        workoutDispatch({type: 'SET_WORKOUTS', payload: null})
    }
    return {logout};
    
}