import { useState } from "react";

import { Button} from '@headlessui/react'

const options = [
    {name:'Date'},
    {name:'Status' , description:['APPLIED','INTERVIEW','OFFER', 'REJECTION']},
  ]
const statusColours = {
    APPLIED: '#FFB347',
    INTERVIEW: '#98FB98',
    OFFER: '#87CEEB',
    REJECTION: '#FFB6C1'
}


export default function Filter(){
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle dialog
    const handleToggleDialog = () => {
      setIsOpen(!isOpen);
    };
  


    return (
        <Button onClick={handleToggleDialog} className="absolute flex flex-wrap pt-3 ml-auto" >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
    </svg>
    {isOpen && (
         <div className="w-children max-w-md flex-auto mt-10 overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
         <div className="p-4">
         {options.map((item) => (
            
         <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 ">
                <div>
                  <a href={item.href} className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                 
                  
                </div>
                {item.description?.map((option) =>(
                    <div style={{background: statusColours[option], borderRadius: '15px', color: 'black',
                        justifyContent: 'center', alignContent: 'center', display: 'flex', fontFamily: 'monospace', fontWeight: 'bold', fontSize: '15px'}}>
                    <Button key={option} className="mt-1 text-gray-600">{option}</Button>
                    </div>
                
                ))}
              </div>
              
         ))}
               </div>
             </div>
      )}
   
    </Button>
    )
}