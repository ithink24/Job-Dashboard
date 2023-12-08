import { useState } from 'react';
import JobCard from './JobCard';

const arr = [1, 2, 3, 4];
function App() {
    const[open, setOpen] = useState(false);
    console.log(open, 'ooo');

    return (
        <div className="w-[100%] px-6 py-4 relative bg-zinc-300">
            <div className="px-4 py-2 mb-4 bg-sky-500 rounded-md shadow w-fit cursor-pointer">
                <button onClick={() => setOpen(!open)}>+ Create New Job</button>
            </div>

            <div className="flex flex-wrap gap-7">
                {arr.map((item) => (
                    <JobCard/>
                ))}
            </div>
        </div>
    );
}

export default App;
