import React from 'react'
import Highlights from './Highlights'

const Horizcard2 = () => {
  return (
    <div className='flex bg-white shadow-sm mt-10'>
        <div>
        {/* <div className='flex bg-orange-400 rounded-r-lg  relative top-[-5px]'>
            <div>*</div>
            <div className='text-white'>Best Choice</div>
        </div> */}
        <div>
           <img src='/laptop.png'/>
        </div>
        </div>
        <div className='ml-14 mr-14 mt-5 text-[17px'>
            <div><b>WixPro 72-Inch Responsive Website Builder-</b> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</div>
            <div >Main highlights</div>
           <div><Highlights/></div>
            {/* <div>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</div> */}
            <div className='flex'> 
                <div className='text-blue-500'>Show more</div>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                     </svg>
                </div>
            </div>
        </div>
        <div className='mr-10 '>
            <div className='bg-blue-2 flex flex-col justify-center items-center mb-4'>
                <div>9.8</div>
                <div>Exceptional</div>
                <div className='flex'>
                {[...Array(5)].map((star) => {        
        return (         
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
          
            // <span className="star"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="star"><path style="marker:none" fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)"></path></svg></span>        
        );
      })}
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="star"><path style="marker:none" fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)"></path></svg> */}
                </div>
            </div>
            <div className='bg-blue-1 text-white rounded-lg px-11'>
                <button>view</button>
            </div>
        </div>
    </div>
  )
}

export default Horizcard2