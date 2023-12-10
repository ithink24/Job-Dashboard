import React, { useState } from 'react';
import Loading from './Images/loading.gif'
import JobCard from './JobCard';
import useGetJobDetails from './hooks/useGetJobDetails';
import CreateJobForm from './CreateJobForm';

function App() {
    const[showModal, setShowModal] = useState(false);
    const [edit, setEdit] = useState({});

    const {data = {}, loading, refetch} = useGetJobDetails();

    const handleClick = () => {
        setShowModal(!showModal);
    }

    return (
        <div className="w-[100%] px-6 py-4 relative bg-zinc-300">
            <div className="px-4 py-2 mb-4 bg-sky-500 rounded-md shadow w-fit cursor-pointer">
                <button onClick={() => handleClick()}>+ Create New Job</button>    
            </div>

            <div className="flex flex-wrap gap-7">
                {data?.length === 0 && loading ?
                <div className="w-[100%] h-[700px] flex justify-center items-center">
                    <img src={Loading} alt="loading"/>
                </div>
                : (data || [])?.map((item) => (
                    <JobCard data={item} setEdit={setEdit} setShowModal={setShowModal}/>
                ))}
            </div>

            <CreateJobForm
                refetch={refetch}
                showModal={showModal}
                setShowModal={setShowModal}
                edit={edit}
                setEdit={setEdit}
            />
        </div>
    );
}

export default App;
