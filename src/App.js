import JobCard from './JobCard';


function App() {
    const arr = [1, 2, 3, 4];
    return (
        <div className="w-[100%] px-6 py-4 relative bg-zinc-300">
            <div className="flex flex-wrap gap-7">
                {arr.map((item) => (
                    <JobCard/>
                ))}
            </div>
        </div>
    );
}

export default App;
