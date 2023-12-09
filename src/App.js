import React, { useState } from 'react';
import JobCard from './JobCard';
import Step1 from './Step1';
import Step2 from './Step2';
import useGetJobDetails from './hooks/useGetJobDetails';

function App() {
    const[showModal, setShowModal] = useState(false);
    const[step, setStep] = useState('step1');

    const {data = {}, loading} = useGetJobDetails();

    return (
        <div className="w-[100%] px-6 py-4 relative bg-zinc-300">
            <div>
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
            </div>
            
            {step === 'step1' ? <Step1 showModal={showModal} setShowModal={setShowModal} setStep={setStep}/>
            : <Step2 showModal={showModal} setShowModal={setShowModal} setStep={setStep}/>}
        </div>
    );
}

export default App;
