import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../Modal';

function Step1({showModal = false, setShowModal = () => {}, setStep = () => {}, setStepdata = () => {} }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setStepdata(data);
        setStep('step2');
    }   

    return (
        <div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <form onSubmit={handleSubmit(onSubmit)} className="simpleForm">
                    <div className="w-[550px] h-[500px] p-8 bg-white rounded-[10px] border flex-col justify-start items-center inline-flex">
                        <div className="flex-col justify-start items-start gap-7 inline-flex">
                            <div className="w-[513px] h-7 justify-between items-center inline-flex">
                                <div className="text-zinc-900 text-xl font-normal font-['Poppins'] leading-7">Create a job</div>
                                <div className="text-right text-zinc-900 text-base font-medium font-['Poppins'] leading-normal">Step 1</div>
                            </div>

                            <div><span className="text-neutral-800 text-sm font-medium font-['Poppins'] leading-tight">Job title</span>
                                <span className="text-red-400 text-sm font-medium font-['Poppins'] leading-tight">*</span>
                                <input type='text' name="job_title" {...register("job_title")} placeholder="ex. UX UI Designer" className="block w-[500px] rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm"/>
                            </div>

                            <div><span className="text-neutral-800 text-sm font-medium font-['Poppins'] leading-tight">Company name</span>
                                <span className="text-red-400 text-sm font-medium font-['Poppins'] leading-tight">*</span>
                                <input type='text' name="company" {...register("company")} placeholder="ex. Google" className="block w-[500px] rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm"/>
                            </div>

                            <div><span className="text-neutral-800 text-sm font-medium font-['Poppins'] leading-tight">Industry</span>
                                <span className="text-red-400 text-sm font-medium font-['Poppins'] leading-tight">*</span>
                                <input type='text' name="industry" {...register("industry")} placeholder='ex. Information Technology' className="block w-[500px] rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm"/>
                            </div>

                            <div className="w-[244.50px] h-[60px] gap-5 justify-start items-start flex">
                                <div>
                                    <div className="text-neutral-800 text-sm font-medium font-['Poppins'] leading-tight">Location</div>
                                    <input type='text' name="location" {...register("location")} placeholder='ex. Chennai' className="block w-[245px] rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm"/>
                                </div>
                                <div>
                                    <div className="text-neutral-800 text-sm font-medium font-['Poppins'] leading-tight">Remote type</div>
                                    <input type='text' name="remote" {...register("remote")} placeholder='ex. In-office' className="block w-[245px] rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm"/>
                                </div>
                            </div>

                            <div className="w-[513px] h-10 justify-end items-center inline-flex mt-6 gap-4">
                                <button onClick={() => setShowModal(false)} className="w-[68px] h-10 px-4 py-2 bg-sky-500 rounded-md shadow justify-center items-center inline-flex cursor-pointer">
                                    <div className="text-white text-base font-medium font-['Poppins'] leading-normal">Cancel</div>
                                </button>
                                <button type="submit" className="w-[68px] h-10 px-4 py-2 bg-sky-500 rounded-md shadow justify-center items-center inline-flex cursor-pointer">
                                    <div className="text-white text-base font-medium font-['Poppins'] leading-normal">Next</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default Step1;
