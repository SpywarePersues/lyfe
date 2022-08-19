import React, {useState, useEffect} from 'react'

export default function Navbar(){
    const [token, setToken] = useState("")
    useEffect(() => {
        setToken(sessionStorage.getItem('Token'))
    }, [])
    return(
        <div className='bg-black bg-opacity-70 w-full p-5 absolute flex justify-between'>
            <a href='/'><p className="text-gray-100 font-Finlandica font-bold text-4xl">L<span className="text-teal-400">y</span>fe</p></a>
            <ul className='flex text-xl text-gray-100 justify-between'>
                {token ? (<div><a href='appointment'><li className='text-teal-400 hover:text-gray-100 cursor-pointer hover:bg-teal-300 px-3 py-2 text-bold hover:ease-in-out duration-200 rounded-sm'>Book an appointment</li></a></div>) : (<div></div>)}
                {token ? (<div><a href='contact'><li className='text-teal-400 hover:text-gray-100 cursor-pointer hover:bg-teal-300 px-3 py-2 text-bold hover:ease-in-out duration-200 rounded-sm ml-2'>Contact</li></a></div>) : (<div><a href='contact'><li className='text-teal-400 hover:text-gray-100 cursor-pointer hover:bg-teal-300 px-3 py-1 text-bold hover:ease-in-out duration-200 rounded-sm'>Contact</li></a></div>)}
                {token? (<div>
                    <a href='/login'>
                        <img src={sessionStorage.getItem('PFP')} alt='' className='rounded-full w-12 ml-4' />
                    </a>
                </div>) : (<div>
                    <li className='text-teal-400 hover:text-gray-100 cursor-pointer hover:bg-teal-300 px-3 py-1 text-bold hover:ease-in-out duration-200 rounded-sm'><a href='/login'>Sign up</a></li>
                </div>)}
            </ul>
        </div>
    )
}