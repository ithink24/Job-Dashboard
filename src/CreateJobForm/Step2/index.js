import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from '../../Components/Modal';
import { InputController } from '../../Components/InputController';
import { INPUTCONTROLS } from './Controls';
import useCreateJob from '../../hooks/useCreateJob';

const defaultValueControls = (data) =>[
    {  
        name: 'min_experience',
        value: data?.min_experience || ''
    },
    {   
        name: 'max_experience',
        value: data?.max_experience || ''
    },
    {   
        name: 'min_salary',
        value: data?.min_salary || ''
    },
    {   
        name: 'max_salary',
        value: data?.max_salary || ''
    },
    {   
        name: 'total_employee',
        value: data?.total_employee || ''
    },
    {   
        name: 'apply_type',
        value: data?.apply_type || ''
    },
]

const Step2 = ({
    showModal = false,
    setShowModal = () => {},
    setStep = () => {},
    stepData = {},
    refetch = () => {},
    edit = {},
    setEdit = () => {}
}) => {
    const [showError, setShowError] = useState('');
    const DEFAULTVALUE = defaultValueControls(edit);
    const { register, handleSubmit, reset, setValue } = useForm();
    const{ createJob, loading } = useCreateJob({refetch, setShowModal, setStep, edit, setEdit, reset});

    useEffect(() => {
        DEFAULTVALUE.forEach(({ name, value }) => setValue(name, value));
    },[setValue]);

    let totalData;
    const onSubmit = (data) => {
        const {min_experience, max_experience, min_salary, max_salary} = data;
        const experience = [min_experience, max_experience];
        const salary = [min_salary, max_salary];

        totalData = {...data, ...stepData, experience, salary};

        if (totalData?.experience?.[0] < 0 && totalData?.salary?.[0] < 0) {
            setShowError('Min Experience and Min Salary cannot be less than 0');
        } else if (totalData?.experience?.[0] < 0) {
            setShowError('Min Experience cannot be less than 0');
        } else if (totalData?.salary?.[0] < 0) {
            setShowError('Min Salary cannot be less than 0');
        }else{
            createJob(totalData);
        }
    };

    const handleClickCancel = () => {
        reset();
        setEdit({});
        setShowModal(false);
        setStep('step1');
    }

    return (
        <Modal showModal={showModal} setShowModal={setShowModal}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-[550px] h-[500px] p-8 bg-white rounded-[10px] border flex-col justify-start items-center inline-flex">
                    <div className="flex-col justify-start items-start inline-flex" style={{ gap: showError ? '16px' : '20px' }}>
                        <div className="w-[513px] h-7 justify-between items-center inline-flex">
                            <div className="text-zinc-900 text-xl font-normal font-['Poppins'] leading-7">Create a job</div>
                            <div className="text-right text-zinc-900 text-base font-medium font-['Poppins'] leading-normal">Step 2</div>
                        </div>

                        {showError && <div className="text-red-400 text-xs font-medium font-['Poppins'] leading-tight">{showError}</div>}

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
                                            className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 cursor-pointer"
                                            {...register("apply_type")}
                                            value={radio.value}
                                            required
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
