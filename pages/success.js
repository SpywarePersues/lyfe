import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'

const success = () => {
    return (
        <div>
            <Head>
                <title>Lyfe | Appointment Booked</title>
            </Head>
            <Navbar />
            <div className="max-w-full rounded overflow-hidden shadow-lg pt-[18rem] text-center">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Appointment Booked.</div>
                <p className="text-gray-700 text-base">
                Your Appointment has successfully been booked, Now within 12 hours you will get your appointment schedule, use the link mentioned in the page in which you have have taken your appointment to join the google meet at the scheduled time.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#getWellSoon</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#lyfeIsTheBest</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bestDoctors</span>
            </div>
            </div>
        </div>
    )
}

export default success