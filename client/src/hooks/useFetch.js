import { useEffect, useState } from 'react';

const useFetch = (url) => {
const [data, setData] = useState([])

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
    }
    useEffect(() => {
        fetchData();
    }, [])
    console.log('responsee' + data)
    return [data] 
}

export default useFetch;