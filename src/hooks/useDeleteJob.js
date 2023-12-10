import axios from "axios";

const baseUrl = 'https://65732bc2192318b7db41ace8.mockapi.io/job/details';

function useDeleteJob ({ refetch = () => {}, id }) {
    const apiUrl = `${baseUrl}/${id}`;

    const DeleteJob = async(data) => {
        try {
            const response = await axios({
                method: 'delete',
                url: apiUrl,
                data: data
            });
            refetch();
            return response.data;
        } catch (e) {
            console.log(e)
        }
    }

    return {
        DeleteJob
    }
}

export default useDeleteJob;
