const Jobs = [
    { name: 'Job 1', href: '#' },
    { name: 'Job 2', href: '#' },
    { name: 'Job 3', href: '#' },
    { name: 'Job 4', href: '#' },
    { name: 'Job 5', href: '#' },
    { name: 'Job 6', href: '#' },
  ]

export default function JobMenu(){
    // Code adapted from https://tailwindflex.com/@lukas-muller/feature-showcase-cards 
    // SVG Icons from https://reactsvgicons.com/
    return( <div>
    <button style={{float:'right', paddingRight:'11rem'}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
    </svg>
    
        </button>
    
    <div class="-mx-4 flex flex-wrap pt-10 p-40">
        {Jobs.map((item) =>(
            <div class="w-full px-4 md:w-1/2 lg:w-3/2">
            <div class="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                <div style={{background:'rgb(199, 206, 212)',borderRadius:'15px',color: 'black',
                    justifyContent:'center',alignContent:'center',display:'flex',fontFamily:'monospace',fontSize:'15px'}}>Applied</div>
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
                    <h3 class="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">{item.name}
                    </h3>
                    <p class="text-base font-medium text-body-color">...</p>
                </div>
            </div>
        </div>
        ))}
        
    

    </div>
    </div>)
}