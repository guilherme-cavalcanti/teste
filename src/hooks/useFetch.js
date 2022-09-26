import axios from "axios"
import { useEffect, useState } from "react"

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [isFetching, setIsFectching] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setIsFectching(false);
            })
    }, [url])
    return { data, error, isFetching }
}