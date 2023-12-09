import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../Modal';
import useCreateJob from '../hooks/useCreateJob';

function Step2({showModal = false, setShowModal = () => {}, setStep = () => {}, stepData = {}, refetch = () => {} }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const{ createJob } = useCreateJob({refetch, setShowModal});

    let totalData;
    const onSubmit = (data) => {
        const {min_experience, max_experience, min_salary, max_salary} = data;
        const experience = [min_experience, max_experience];
        const salary = [min_salary, max_salary];

        totalData = {...data, ...stepData, experience, salary};
        createJob(totalData);
    }



  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
        <form onSubmit={handleSubmit(onSubmit)} className="simpleForm">
            <div className="w-[550px] h-[500px] p-8 bg-white rounded-[10px] border flex-col justify-start items-center inline-flex">
                <div className="flex-col justify-start items-start gap-5 inline-flex">
                    <div className="w-[513px] h-7 justify-between items-center inline-flex">
                        <div className="text-zinc-900 text-xl font-normal font-['Poppins'] leading-7">Create a job</div>
                        <div className="text-right text-zinc-900 text-base font-medium font-['Poppins'] leading-normal">Step 2</div>
                    </div>

                    <div>
                        <div className="text-neutral-800 text-sm font-medium font-['Poppins']">Experience</div>
                        <div className="h-[60px] gap-5 justify-start items-start flex">
                            <input type='text' name="min_experience" {...register("min_experience")} placeholder='Minimum' className="block w-[245px] rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm"/>
                            <input type='text' name="max_experience" {...register("max_experience")} placeholder='Maximum' className="block w-[245px] rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm"/>
                        </div>
                    </div>

                    <div>
                        <div className="text-neutral-800 text-sm font-medium font-['Poppins']">Salary</div>
                        <div className="h-[60px] gap-5 justify-start items-start flex">
                            <input type='text' name="min_salary" {...register("min_salary")} placeholder='Minimum' className="block w-[245px] rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm"/>
                            <input type='text' name="max_salary" {...register("max_salary")} placeholder='Maximum' className="block w-[245px] rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm"/>
                        </div>
                    </div>

                    <div>
                        <span className=" text-neutral-800 text-sm font-medium font-['Poppins']">Total employee</span>
                        <input type='text' name="total_employee" {...register("total_employee")} placeholder="ex. 100" className="block w-[500px] rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm"/>
                    </div>

                    <div>
                        <div className="text-neutral-800 text-sm font-medium font-['Poppins'] mb-1 mt-4">Salary</div>
                        <div className="gap-5 justify-start items-start flex">
                        <div class="flex items-center mb-4">
                            <input id="quick-radio" type="radio" value="" name="quick" class="w-4 h-4 mr-2 text-blue-600 bg-gray-100 cursor-pointer"/>
                            <label for="quick-radio" className="text-neutral-500 text-sm font-normal font-['Poppins']">Quick apply</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="external-radio" type="radio" value="" name="external" class="w-4 h-4 mr-2 text-blue-600 bg-gray-100 cursor-pointer"/>
                            <label for="external-radio" className="text-neutral-500 text-sm font-normal font-['Poppins']">External apply</label>
                        </div>
                        </div>
                    </div>

                    <div className="w-[513px] h-10 justify-end items-center inline-flex gap-4">
                        <button onClick={() => setShowModal(false)} className="w-[68px] h-10 px-4 py-2 bg-sky-500 rounded-md shadow justify-center items-center inline-flex cursor-pointer">
                            <div className="text-white text-base font-medium font-['Poppins'] leading-normal">Cancel</div>
                        </button>
                        <button  type="submit" className="w-[68px] h-10 px-4 py-2 bg-sky-500 rounded-md shadow justify-center items-center inline-flex cursor-pointer">
                            <div className="text-white text-base font-medium font-['Poppins'] leading-normal">save</div>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </Modal>
  )
}

export default Step2;
