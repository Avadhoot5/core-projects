import {useState, useEffect} from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const init = async() => {
            try {
                const response = await fetch(url, {
                    method: "GET"
                })
                if (!response.ok) {
                    throw Error('Could not fetch data for the resource');
                }
                const data = await response.json();
                setData(data);
                setIsLoading(false);
                setError(null);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }  
        }
        init();
    },[])

    return {data, isLoading, error, setData}

}

export default useFetch