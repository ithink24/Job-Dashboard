import React from 'react'
import Netflix from '../Images/netflix.png'

function JobCard() {
    return (
        <div className="w-[100%] relative bg-zinc-300">
            <div className="w-[800px] h-100 px-6 py-4 bg-white rounded-[10px] border border-gray-300 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="justify-between items-start inline-flex">
                    <div className="w-[357px] justify-start items-start gap-2 flex">
                        <img className="w-12 h-12 rounded-[5px]" src={Netflix} alt="logo"/>

                        <div className="flex-col justify-start items-start gap-5 inline-flex">
                            <div className="flex-col justify-start items-start gap-6 flex">
                                <div className="flex-col justify-start items-start flex">
                                    <div className="text-black text-2xl font-normal font-['Poppins']">UX UI Designer</div>
                                    <div className="text-black font-['Poppins']">Great Vibes - Information Technology</div>
                                    <div className="text-stone-500 font-['Poppins']">Chennai, Tamilnadu, India (In-office)</div>
                                </div>

                                <div className="h-[120px] flex-col justify-start items-start gap-2 flex">
                                    <div className="text-neutral-800 font-['Poppins']">Part-Time (9.00 am - 5.00 pm IST)</div>
                                    <div className="text-neutral-800 font-['Poppins']">Experience (1 - 2 years)</div>
                                    <div className="text-neutral-800 font-['Poppins']">INR (₹) 30,000 - 50,000 / Month</div>
                                    <div className="text-neutral-800 font-['Poppins']">51-200 employees</div>
                                </div>

                                <div className="flex-col justify-center items-start gap-1 flex">
                                    <div className="px-4 py-2 bg-sky-500 rounded-md shadow justify-center items-center flex">
                                        <div className="text-white font-medium font-['Poppins']">Apply Now</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div/>
            </div>
        </div>
    </div>
)}

export default JobCard;
