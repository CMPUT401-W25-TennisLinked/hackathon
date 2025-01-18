import SearchBar from "./SearchBar"
import { useState, useEffect } from 'react';


const statusColours = {
    APPLIED: '#FFB347',
    INTERVIEW: '#98FB98',
    OFFER: '#87CEEB',
    REJECTION: '#FFB6C1'
}

export default function JobMenu() {
    // Code adapted from https://tailwindflex.com/@lukas-muller/feature-showcase-cards 
    // SVG Icons from https://reactsvgicons.com/

    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetch('/api/application/')
            .then((res) => res.json())
            .then((data) => setApplications(data.applications))
    }, []);

    return (<div>
        <header className="bg-white shadow mb-8">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold font-sans tracking-tight text-gray-900">Applied </h1>
            </div>
        </header>
        <SearchBar />

        <div class="-mx-4 flex flex-wrap pt-10 p-40">
            {applications.length > 0 ? (applications.map((job) => (
                <div class="w-full px-4 md:w-1/2 lg:w-3/2">
                    <div class="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                        <div style={{
                            background: statusColours[job.status], borderRadius: '15px', color: 'black',
                            justifyContent: 'center', alignContent: 'center', display: 'flex', fontFamily: 'monospace', fontWeight: 'bold', fontSize: '15px'
                        }}>{job.status}</div>
                        <div class="mx-auto mt-5 mb-auto inline-block">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="4 0 20 30"
                                width="5rem"
                                height="5rem"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2s-9-2-9-2m9-2h.01"
                                ></path></svg></div>
                        <div>
                            <h3 class="text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">{job.position}</h3>
                            <p class="text-base text-body-color">{job.companyName}</p>
                        </div>
                    </div>
                </div>
            ))) : (
                <div className="flex w-full justify-center h-full">
                    <p>No applications yet!</p>
                </div>
            )}
        </div>
    </div>)
}