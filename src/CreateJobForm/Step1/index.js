import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from '../../Components/Modal';
import { InputController } from '../../Components/InputController';
import { INPUTCONTROLS, OTHERINPUTCONTROLS } from './Controls';

const defaultValueControls = (data) =>[
    {  
        name: 'job_title',
        value: data?.job_title || ''
    },
    {   
        name: 'company',
        value: data?.company || ''
    },
    {   
        name: 'industry',
        value: data?.industry || ''
    },
    {   
        name: 'location',
        value: data?.location || ''
    },
    {   
        name: 'remote',
        value: data?.remote || ''
    },
]

const Step1 = ({
    showModal = false,
    setShowModal = () => {},
    setStep = () => {},
    setStepdata = () => {},
    edit = {},
    setEdit = () => {},
}) => {
    const DEFAULTVALUE = defaultValueControls(edit);
    const { register, handleSubmit, reset, setValue } = useForm();

    useEffect(() => {
        DEFAULTVALUE.forEach(({ name, value }) => setValue(name, value));
    },[setValue, DEFAULTVALUE])

    const onNext = (data) => {
        setStepdata(data);
        setStep('step2');
    };

    const handleClick = () => {
        setEdit({});
        reset();
        setShowModal(false);
    }

    return (
        <Modal showModal={showModal} setShowModal={setShowModal}>
            <form onSubmit={handleSubmit(onNext)}>
                <div className="w-[550px] h-[500px] p-8 bg-white rounded-[10px] border flex-col justify-start items-center inline-flex">
                    <div className="flex-col justify-start items-start gap-7 inline-flex">
                        <div className="w-[513px] h-7 justify-between items-center inline-flex">
                            <div className="text-zinc-900 text-xl font-normal font-['Poppins'] leading-7">Create a job</div>
                            <div className="text-right text-zinc-900 text-base font-medium font-['Poppins'] leading-normal">Step 1</div>
                        </div>

                        {INPUTCONTROLS.map((inputProps, index) => (
                            <InputController key={index} {...inputProps} register={register}/>
                        ))}

                        <div className="w-[244.50px] h-[60px] gap-5 justify-start items-start flex">
                            {OTHERINPUTCONTROLS.map((inputProps, index) => (
                                <InputController key={index} {...inputProps} register={register} />
                            ))}
                        </div>

                        <div className="w-[513px] h-10 justify-end items-center inline-flex mt-6 gap-4">
                            {[
                                { text: 'Cancel', onClick: () => handleClick() },
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
