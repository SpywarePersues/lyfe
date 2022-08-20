import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import ContainerBlock from '../components/ContainerBlock'
import Navbar from '../components/Navbar'

const success = () => {
    return (
        <ContainerBlock>
            <div className='font-Finlandica h-[92vh] py-60 lg:w-9/12 mx-auto w-11/12'>
                <Head>
                    <title>Lyfe | Appointment Booked</title>
                </Head>
                
                <div className="text-center lg:w-8/12 mx-auto">
                    <div className="text-3xl font-bold">Appointment Booked.</div>
                    <p className="text-gray-700 text-base">
                    Your Appointment has successfully been booked, You will recieve a mail shorlty. Please join the link at the time slot given to you in the mail.
                    </p>
                </div>
                <div className="flex justify-center py-10">
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#getWellSoon</span>
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#lyfeIsTheBest</span>
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bestDoctors</span>
                </div>
                <Link href="/">
                    <div className='text-center rouned-lg'>
                        <button className='text-gray-100 bg-gradient-to-r from-emerald-500 to-indigo-500 py-3 px-7 text-3xl duration-200 cursor-pointer font-Finlandica hover:ease-in-out hover:bg-gradient-to-l'>Go Back</button>
                    </div>
                </Link>
            </div>
        </ContainerBlock>
    )
}

export default success