import React from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from '../Components/Modal';
import { InputController } from '../Components/InputController';
import useCreateJob from '../hooks/useCreateJob';

const INPUTCONTROLS = [
    {
        label: 'Experience',
        inputs: [
            { name: 'min_experience', placeholder: 'Minimum', width: '245px' },
            { name: 'max_experience', placeholder: 'Maximum', width: '245px' },
        ],
    },
    {
        label: 'Salary',
        inputs: [
            { name: 'min_salary', placeholder: 'Minimum', width: '245px' },
            { name: 'max_salary', placeholder: 'Maximum', width: '245px' },
        ],
    },
    {
        label: 'Total employee',
        inputs: [
            { name: 'total_employee', placeholder: 'ex. 100', width: '500px' }
        ],
    },
    {
        label: 'Apply Type',
        radios: [
            { id: 'quick-radio', label: 'Quick apply' },
            { id: 'external-radio', label: 'External apply' },
        ],
    },
]

const Step2 = ({
    showModal = false,
    setShowModal = () => {},
    setStep = () => {},
    stepData = {},
    refetch = () => {}
}) => {
    const { register, handleSubmit } = useForm();
    const{ createJob, loading } = useCreateJob({refetch, setShowModal, setStep});

    let totalData;
    const onSubmit = (data) => {
        const {min_experience, max_experience, min_salary, max_salary} = data;
        const experience = [min_experience, max_experience];
        const salary = [min_salary, max_salary];

        totalData = {...data, ...stepData, experience, salary};
        createJob(totalData);
    };

    const handleClickCancel = () => {
        setShowModal(false);
        setStep('step1');
    }

    return (
        <Modal showModal={showModal} setShowModal={setShowModal}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-[550px] h-[500px] p-8 bg-white rounded-[10px] border flex-col justify-start items-center inline-flex">
                    <div className="flex-col justify-start items-start gap-5 inline-flex">
                        <div className="w-[513px] h-7 justify-between items-center inline-flex">
                            <div className="text-zinc-900 text-xl font-normal font-['Poppins'] leading-7">Create a job</div>
                            <div className="text-right text-zinc-900 text-base font-medium font-['Poppins'] leading-normal">Step 2</div>
                        </div>

                        {INPUTCONTROLS.map((section, index) => (
                            <div key={index}>
                                <div className={`text-neutral-800 text-sm font-medium font-['Poppins'] ${section.label === 'Total employee' ? 'mb-1 mt-4' : ''}`}>
                                {section.label}
                            </div>

                            {section.inputs ? (
                                <div className="h-[50px] gap-5 justify-start items-start flex">
                                    {section.inputs.map((input, i) => (
                                    <InputController key={i} {...input} register={register} />
                                    ))}
                                </div>
                            ) : null}

                            {section.radios ? (
                                <div className="gap-5 justify-start items-start flex">
                                    {section.radios.map((radio, i) => (
                                    <div className="flex items-center mb-4" key={i}>
                                        <input
                                            id={radio.id}
                                            type="radio"
                                            value=""
                                            name={radio.name}
                                            className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 cursor-pointer"
                                        />
                                        <label htmlFor={radio.id} className="text-neutral-500 text-sm font-normal font-['Poppins']">
                                            {radio.label}
                                        </label>
                                    </div>
                                    ))}
                                </div>
                            ) : null}
                            </div>
                        ))}

                        <div className="w-[513px] h-10 justify-end items-center inline-flex gap-4">
                            {[
                                { text: 'Cancel', onClick: () => handleClickCancel() },
                                { type: 'submit', text: loading ? 'submitting...' : 'save' },
                            ].map((buttonProps, index) => (
                                <button
                                    key={index}
                                    onClick={buttonProps.onClick}
                                    type={buttonProps.type}
                                    className="h-10 px-4 py-2 bg-sky-500 rounded-md shadow justify-center items-center inline-flex cursor-pointer"
                                    >
                                    <div className="text-white text-base font-medium font-['Poppins'] leading-normal">{buttonProps.text}</div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default Step2;
