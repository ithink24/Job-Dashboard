import { useState } from 'react';
import axios from "axios";

const baseUrl = 'https://65732bc2192318b7db41ace8.mockapi.io/job/details';

function useCreateJob({ refetch = () => {}, setShowModal = () => {}, setStep = () => {} }) {
    const[loading, setLoading] = useState(false);

    const createJob = async(data) => {
        try {
            setLoading(true);
            const response = await axios.post(baseUrl, data);
            setLoading(false);
            setShowModal();
            setStep('step1')
            refetch();
            return response.data;
        } catch (e) {
            setLoading(false);
            console.log(e)
        }
    }

    return {
        loading,
        createJob
    }
}

export default useCreateJob;
