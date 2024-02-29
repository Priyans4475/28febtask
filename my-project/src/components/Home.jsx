import React from 'react'

import Verticard from './Verticard'
import Horizcard from './Horizcard1'
import Horizcard1 from './Horizcard1'
import Horizcard2 from './Horizcard2'
import { IoDiamondOutline } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";

const Home = () => {
  return (
    <div className='max-w-7xl px-20 ml-20 bg-white-1'>
        <div className=''>
            <div className='text-5xl font-inter shadow-md	'>Best Website builders in the US</div>
            <div className='flex justify-between shadow-md'>
            <div className='flex '>
                
                <div className='flex'>
                       <div>
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                       </svg>

                       </div>
                       <div> Last Updated - February 22, 2020</div>
                </div>
                <div className='flex'>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>

                        </div>
                        <div>Advertising Disclosure</div>
                </div>
             
            </div>
            <div className='flex'>
                <div>Top Relevant</div>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                         <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                </div>
            </div>
            </div>
        </div>
        <Horizcard1 icon={<IoDiamondOutline />} marking={'Exceptional'} choice={'Best Choice'} />
        <Horizcard1 icon={<TfiCup />} marking={'Excellent'} choice={'Best Value'}/>
        <Horizcard2/>
        Related deals you might like for
        <div className='flex'>
        <Verticard/>
        <Verticard/>
        <Verticard/>
        </div>
        
    </div>
  )
}

export default Home