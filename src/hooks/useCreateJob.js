import { useState } from 'react';
import axios from "axios";

const baseUrl = 'https://65732bc2192318b7db41ace8.mockapi.io/job/details';

function useCreateJob({ refetch = () => {}, setShowModal = () => {}, setStep = () => {}, edit = {}, setEdit = () => {}, reset = () => {} }) {
    const[loading, setLoading] = useState(false);

    const id = edit?.id;
    const apiUrl = id ? `${baseUrl}/${id}` : baseUrl;
    const method = id ? 'put' : 'post';

    const createJob = async(data) => {
        try {
            setLoading(true);

            const response = await axios({
                method: method,
                url: apiUrl,
                data: data
            });

            setLoading(false);
            setShowModal();
            setStep('step1');
            refetch();
            reset();
            setEdit({});
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
