import React from 'react';
import EditIcon from '../Images/edit.png';
import Netflix from '../Images/netflix.png';
import Delete from '../Images/delete.svg';
import useDeleteJob from '../hooks/useDeleteJob';

function JobCard({ data = {}, setEdit = () => {}, setShowModal = () => {}, refetch = () => {} }) {
    const { DeleteJob } = useDeleteJob({id: data?.id, refetch});

    const handleEdit = () => {
        setEdit(data);
        setShowModal(true);
    };

    return (
        <div className="w-[49%] h-100 px-6 py-4 bg-white rounded-[10px] border border-gray-300">
            <div className="flex justify-between items-start">
                <div className="w-[357px] justify-start items-start gap-2 flex">
                    <img className="w-12 h-12 rounded-[5px]" src={Netflix} alt="logo"/>

                    <div className="flex-col justify-start items-start gap-6 flex">
                        <div className="flex-col justify-start items-start flex">
                            <div className="text-black text-2xl font-normal font-['Poppins']">{data?.job_title}</div>
                            <div className="text-black font-['Poppins']">{data?.company} - {data?.industry}</div>
                            <div className="text-stone-500 font-['Poppins']">{data?.location}</div>
                        </div>

                        <div className="h-[120px] flex-col justify-start items-start gap-2 flex">
                            <div className="text-neutral-800 font-['Poppins']">Full-Time (9.00 am - 5.00 pm IST)</div>
                            <div className="text-neutral-800 font-['Poppins']">Experience ({data?.experience[0]} - {data?.experience[1]} years)</div>
                            <div className="text-neutral-800 font-['Poppins']">INR (₹) {data?.salary?.[0]} - {data?.salary?.[1]} / Month</div>
                            <div className="text-neutral-800 font-['Poppins']">{data?.total_employee} employees</div>
                        </div>

                        <div className="flex-col justify-center items-start gap-1 flex">
                            <div className="px-4 py-2 bg-sky-500 rounded-md shadow justify-center items-center flex">
                                <div className="text-white font-medium font-['Poppins']">
                                    {data?.apply_type !== "external_apply" ? "Apply Now" : "External Apply"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-4">
                    <div className="cursor-pointer" onClick={() => handleEdit()}>
                        <img src={EditIcon} alt='edit' width={20} height={20}/>
                    </div>
                    <div className="cursor-pointer" onClick={() => DeleteJob()}>
                        <img src={Delete} alt="delete" width={20} height={20}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard;
