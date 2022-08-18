import React from 'react'

export default function Navbar(){
    return(
        <div className='bg-black bg-opacity-70 w-full p-5 absolute flex justify-between'>
            <p className="text-gray-100 font-Finlandica font-bold text-4xl">L<span className="text-teal-400">y</span>fe</p>
            <ul className='flex text-xl text-gray-100 justify-between'>
                <li className='text-teal-400 hover:text-gray-100 cursor-pointer hover:bg-teal-300 px-3 py-1 text-bold hover:ease-in-out duration-200 rounded-sm'>Contact</li>
                <li className='text-teal-400 hover:text-gray-100 cursor-pointer hover:bg-teal-300 px-3 py-1 text-bold hover:ease-in-out duration-200 rounded-sm'>Sign up</li>
            </ul>
        </div>
    )
}