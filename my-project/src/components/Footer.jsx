import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white flex justify-evenly'>
        <div className=''> 
            <div>CATEGORIES</div>
            <div className='text-sm text-gray-1'>
            <div >Web Builder</div>
            <div>Hosting</div>
            <div>Data Center</div>
            <div>Robotic-Automation</div>
            </div>
            
        </div>
        <div> 
            <div>CONTACT</div>
            <div className='text-sm text-gray-1'>
            <div>Contact</div>
            <div>Privacy Policy</div>
            <div>Terms Of Service</div>
            <div>Categories</div>
            <div>About</div>
            </div>
            
        </div>
        <div className='flex mt-10'>
            <div>United States</div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

            </div>
        </div>
    </div>
  )
}

export default Footer