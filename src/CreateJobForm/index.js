import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';

function CreateJobForm({ showModal = '', setShowModal = () => {}, refetch = () => {} }) {
    const[step, setStep] = useState('step1');
    const[stepData, setStepdata] = useState({});

    return (
        <div>
            {step === 'step1' ? 
                <Step1 
                    showModal={showModal}
                    setShowModal={setShowModal}
                    setStep={setStep}
                    setStepdata={setStepdata}
                />
                : <Step2
                    showModal={showModal}
                    setShowModal={setShowModal}
                    setStep={setStep}
                    stepData={stepData}
                    refetch={refetch}
                />
            }
        </div>
    )
}

export default CreateJobForm;
