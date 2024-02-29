import React from 'react'

const Header = () => {
  return (
    <div className='flex bg-black justify-evenly items-center'>
        

     <div className='h-10 m-2 '>
      
    <div class="relative  ">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" >
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 rounded-lg bg-white "  required />
        {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
    </div>
     
     </div>
    <div className='font-inter text-white'>Categories</div>
    <div className='font-inter text-base font-normal leading-5 tracking-normal  text-white'>Website Builders</div>
    <div className='font-inter text-base font-normal leading-5 tracking-normal  text-white'>Today's deals</div>
    </div>
  )
}

export default Header