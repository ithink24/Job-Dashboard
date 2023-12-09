import React from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from '../Components/Modal';
import { InputController } from '../Components/InputController';

const INPUTCONTROLS = [
    { label: 'Job title', name: 'job_title', placeholder: 'ex. UX UI Designer', mandatory: true, width: '500px', required: true },
    { label: 'Company name', name: 'company', placeholder: 'ex. Google', mandatory: true, width: '500px', required: true },
    { label: 'Industry', name: 'industry', placeholder: 'ex. Information Technology', mandatory: true, width: '500px', required: true},
]

const OTHERINPUTCONTROLS = [
    { label: 'Location', name: 'location', placeholder: 'ex. Chennai', width: '245px' },
    { label: 'Remote type', name: 'remote', placeholder: 'ex. In-office', width: '245px' },
]

function Step1({showModal = false, setShowModal = () => {}, setStep = () => {}, setStepdata = () => {} }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    console.log(errors, 'errors');

    const onSubmit = (data) => {
        setStepdata(data);
        setStep('step2');
    };

    return (
        <Modal showModal={showModal} setShowModal={setShowModal}>
            <form onSubmit={handleSubmit(onSubmit)} className="simpleForm">
                <div className="w-[550px] h-[500px] p-8 bg-white rounded-[10px] border flex-col justify-start items-center inline-flex">
                    <div className="flex-col justify-start items-start gap-7 inline-flex">
                        <div className="w-[513px] h-7 justify-between items-center inline-flex">
                            <div className="text-zinc-900 text-xl font-normal font-['Poppins'] leading-7">Create a job</div>
                            <div className="text-right text-zinc-900 text-base font-medium font-['Poppins'] leading-normal">Step 1</div>
                        </div>

                        {INPUTCONTROLS.map((inputProps, index) => (
                            <InputController key={index} {...inputProps} register={register} />
                        ))}

                        <div className="w-[244.50px] h-[60px] gap-5 justify-start items-start flex">
                            {OTHERINPUTCONTROLS.map((inputProps, index) => (
                                <InputController key={index} {...inputProps} register={register} />
                            ))}
                        </div>

                        <div className="w-[513px] h-10 justify-end items-center inline-flex mt-6 gap-4">
                            {[
                                { text: 'Cancel', onClick: () => setShowModal(false) },
                                { type: 'submit', text: 'Next' },
                            ].map((buttonProps, index) => (
                                <button
                                    key={index}
                                    onClick={buttonProps.onClick}
                                    type={buttonProps.type}
                                    className="w-[68px] h-10 px-4 py-2 bg-sky-500 rounded-md shadow justify-center items-center inline-flex cursor-pointer"
                                    >
                                    <div className="text-white text-base font-medium font-['Poppins'] leading-normal">
                                        {buttonProps.text}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default Step1;
