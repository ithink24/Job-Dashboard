import React, { useState } from 'react';
import JobCard from './JobCard';
import useGetJobDetails from './hooks/useGetJobDetails';
import CreateJobForm from './CreateJobForm';

function App() {
    const[showModal, setShowModal] = useState(false);

    const {data = {}, loading, refetch} = useGetJobDetails();

    return (
        <div className="w-[100%] px-6 py-4 relative bg-zinc-300">
            <div className="px-4 py-2 mb-4 bg-sky-500 rounded-md shadow w-fit cursor-pointer">
                <button onClick={() => setShowModal(!showModal)}>+ Create New Job</button>    
            </div>

            <div className="flex flex-wrap gap-7">
                {data?.length === 0 && loading ? 
                    <div>Loading...</div> 
                : (data || [])?.map((item) => (
                    <JobCard data={item}/>
                ))}
            </div>

            <CreateJobForm refetch={refetch} showModal={showModal} setShowModal={setShowModal}/>
        </div>
    );
}

export default App;
