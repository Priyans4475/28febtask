import React from 'react'

const Highlights = () => {
  return (
    <div className='m-5 rounded-md'>
        <div className='bg-orange-1'>
            <div className='flex'>
               <div className='mr-5 ml-5 px-2 mt-2 bg-white text-blue-500'>9.9</div>
               <div>Building responsive</div>
            </div>
            <div className='flex'>
               <div className='mr-5 ml-5 px-2 mt-2 bg-white text-blue-500'>8.9</div>
               <div>Cool</div>
            </div>
            <div className='flex'>
               <div className='mr-5 mb-2 ml-5 px-2 mt-2 bg-white text-blue-500'>8.9</div>
               <div>Docs</div>
            </div>
        </div>
        <div>
               <div>Why we love it</div>
               <div className='flex'>
               <div>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                       </svg>
               </div>
               <div>Documentation</div>
               </div>
               <div className='flex'>
               <div>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                       </svg>
               </div>
               <div>Easy Use</div>
               </div>
               <div className='flex'>
               <div>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                       </svg>
               </div>
               <div>Out of box</div>
               </div>
        </div>
    </div>
  )
}

export default Highlights