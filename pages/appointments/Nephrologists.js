import React from 'react'
import { useRef as UseRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Nephrologists = () => {
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
                <title>Lyfe | Nephrologists</title>
            </Head>
            <Navbar />
            <h1 className='text-4xl ml-[40rem] pt-[8rem] underline'>Nephrologists</h1>
            <p className='w-[45rem] text-center text-2xl ml-[24.5rem] mt-6'>They treat kidney diseases as well as high blood pressure and fluid and mineral imbalances linked to kidney disease.</p>
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

export default Nephrologists