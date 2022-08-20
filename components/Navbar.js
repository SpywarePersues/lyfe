import React, {useState, useEffect} from 'react'
import Link from 'next/link'

export default function Navbar(){
    const [token, setToken] = useState("")
    useEffect(() => {
        setToken(sessionStorage.getItem('Token'))
    }, [])
    return(
        <div className='bg-black bg-opacity-70 w-full p-5 absolute flex justify-between'>
            <Link href={'/'}><p className="text-gray-100 font-Finlandica font-bold text-4xl cursor-pointer">L<span className="text-teal-400 cursor-pointer">y</span>fe</p></Link>
            <ul className='flex text-xl text-gray-100 justify-between'>
                {token ? (<div><Link href={'/appointment'}><li className='text-teal-400 hover:text-gray-100 cursor-pointer hover:bg-teal-300 px-3 py-2 text-bold hover:ease-in-out duration-200 rounded-sm'>Appointment</li></Link></div>) : (<div></div>)}
                {token ? (<div><Link href={'/contact'}><li className='text-teal-400 hover:text-gray-100 cursor-pointer hover:bg-teal-300 px-3 py-2 text-bold hover:ease-in-out duration-200 rounded-sm ml-2'>Contact</li></Link></div>) : (<div><Link href={'/contact'}><li className='text-teal-400 hover:text-gray-100 cursor-pointer hover:bg-teal-300 px-3 py-1 text-bold hover:ease-in-out duration-200 rounded-sm'>Contact</li></Link></div>)}
                {token? (<div>
                    <Link href={'/login'}>
                        <img src={sessionStorage.getItem('PFP')} alt='' className='rounded-full w-8 ml-4 mt-2 cursor-pointer' />
                    </Link>
                </div>) : (<div>
                    <li className='text-teal-400 hover:text-gray-100 cursor-pointer hover:bg-teal-300 px-3 py-1 text-bold hover:ease-in-out duration-200 rounded-sm'><Link href='/login'>Sign up</Link></li>
                </div>)}
            </ul>
        </div>
    )
}