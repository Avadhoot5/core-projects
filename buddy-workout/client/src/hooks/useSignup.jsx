import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { BASE_URL } from '../App';


export const useSignup = () => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`${BASE_URL}api/user/signup`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password})
        })
        const data = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(data.error);
        }

        if (response.ok) {
            setIsLoading(false);

            // save the token in browser
            localStorage.setItem('user', JSON.stringify(data));
            
            // set the auth state
            dispatch({type: 'LOGIN', payload: data});
        }
    }
    return { signup, error, isLoading }
}

