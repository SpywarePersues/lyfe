import React from 'react'
import { useRef as UseRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

const Pulmonologists = () => {
    const router = useRouter()
    const form = UseRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9lx6u17', 'template_2hn2a5a', form.current, 'lqJYwfG4kFxV99VK8')
        .then((result) => {
            console.log(result.text);
            router.push('/success')
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div>
            <Head>
                <title>Lyfe | Pulmonologists</title>
            </Head>
            <Navbar />
            <h1 className='text-4xl ml-[40rem] pt-[8rem] underline'>Pulmonologists</h1>
            <p className='w-[45rem] text-center text-2xl ml-[24.5rem] mt-6'>You would see these specialists for problems like lung cancer, pneumonia, asthma, emphysema, and trouble sleeping caused by breathing issues.</p>
            <div className="px-6 pt-4 pb-2 ml-[37rem]">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-500 mr-2 mb-2"><Link href='https://meet.google.com/xek-vshf-bfp'>https://meet.google.com/xek-vshf-bfp</Link></span>
            </div>
            <form ref={form} onSubmit={sendEmail} className='class="bg-white shadow-md rounded px-8 pt-6 pb-[3.85rem] mb-4"'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
                <input type="text" name="user_name" required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                <input type="email" name="user_email" required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' />
                <label className='block text-gray-700 text-sm font-bold mb-2'>Issue</label>
                <textarea name="message" required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' />
                <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Book an Appointment</button>
            </form>
            <Footer />
        </div>
    )
}

export default Pulmonologists