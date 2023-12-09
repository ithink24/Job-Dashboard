import { useState, useEffect } from 'react';
import axios from "axios";

const baseUrl = 'https://65732bc2192318b7db41ace8.mockapi.io/job/details';

function useGetJobDetails() {
    const[data, setData] = useState('');
    const[loading, setLoading] = useState(false);

    const getdata = async() => {
        try {
            setLoading(true);
            await axios.get(baseUrl).then(res => {
                setData(res.data);
            });
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log(e)
        }
    }

    useEffect(() => {
        getdata();
    }, []);

    return {
        data,
        setData,
        loading,
        refetch: getdata
    }
}

export default useGetJobDetails
