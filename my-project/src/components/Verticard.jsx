import React from 'react'

const Verticard = () => {
  return (
    <div className='p-5'>
      <div>
      <img src='/laptop.png'/>
      </div>
      <div>
        <div className='flex'>
          <div className='bg-gray-300 rounded-md px-2 text-blue-500'>20% Off</div>
          <div className='bg-gray-300 rounded-md px-2 text-blue-500 ml-2'>Limited time </div>
        </div>
        <div className='font-bold text-gray-500 ml-14'>Webbuilder 1</div>
        <div>Computer  Modern clasic with wix support</div>
        <div className='flex m-2 '>
          <div className='text-lg'>$39.96</div>
          <div className='text-sm ml-2 m-2'><del>$49.96</del></div>
          <div className='text-red-700'>(20% Off)</div>

        </div>
        <div className='bg-blue-1 text-white rounded-lg flex justify-center items-center'>
                <button >View deal</button>
            </div>
      </div>
    </div>
  )
}

export default Verticard