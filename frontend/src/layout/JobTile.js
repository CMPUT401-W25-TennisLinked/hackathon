const jobs = [
  { name: 'Job 1', href: '#', status: ''},
  { name: 'Job 2', href: '#', status: ''},
  { name: 'Job 3', href: '#', status: ''},
  { name: 'Job 4', href: '#', status: ''}
]

export default function Tile(){
    // Code adapted from https://tailwindflex.com/@lukas-muller/feature-showcase-cards 
    return(<div class="-mx-4 flex flex-wrap pt-0 p-40">
    
        <div class="w-full px-4 md:w-1/2 lg:w-3/2">
            <div class="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                <div class="mx-auto mb-auto inline-block">     <svg
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
                    <h3 class="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">Job 1
                    </h3>
                    <p class="text-base font-medium text-body-color">...</p>
                </div>
            </div>
        </div>
    
    
    
        <div class="w-full px-4 md:w-1/2 lg:w-3/2">
            <div class="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                <div class="mx-auto mb-auto inline-block">     
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
                    <h3 class="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">Job 2
                    </h3>
                    <p class="text-base font-medium text-body-color">...</p>
                </div>
            </div>
        </div>
    
    
    
        <div class="w-full px-4 md:w-1/2 lg:w-3/2">
            <div class="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                <div class="mx-auto mb-auto inline-block">

                            
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
                    ></path>
                    
                    </svg></div>
                <div>
                    <h3 class="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">Job 3
                    </h3>
                    <p class="text-base font-medium text-body-color">...</p>
                </div>
            </div>
        </div>
    
    
        
        <div class="w-full px-4 md:w-1/2 lg:w-3/2">
            <div class="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                <div class="mx-auto mb-auto inline-block">     <svg
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
                    <h3 class="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">Job 4</h3>
                    <p class="text-base font-medium text-body-color">...</p>
                </div>
            </div>
        </div>
    
    
        <div class="w-full px-4 md:w-1/2 lg:w-3/2">
            <div class="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                <div class="mx-auto mb-auto inline-block">     <svg
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
                    <h3 class="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">Job 5</h3>
                    <p class="text-base font-medium text-body-color">...</p>
                </div>
            </div>
        </div>
    
    
        <div class="w-full px-4 md:w-1/2 lg:w-3/2">
            <div class="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                <div class="mx-auto mb-auto inline-block">     <svg
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
                    <h3 class="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">Job 6
                    </h3>
                    <p class="text-base font-medium text-body-color">...</p>
                </div>
            </div>
        </div>
    </div>)
}