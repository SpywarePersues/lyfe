import React from 'react'
import { useRef as UseRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import ContainerBlock from '../../components/ContainerBlock';

const Doofenshmirtz = () => {
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
        <ContainerBlock>
        <div className='py-32 font-Finlandica h-[95vh]'>
            <Head>
                <title>Lyfe | Nemo</title>
            </Head>`
            <h1 className='text-3xl text-center font-bold'>Dr. Nemo Ghosh</h1>
            <p className='text-base text-center font-bold'>Otolaryngologists</p>
            <form ref={form} onSubmit={sendEmail} className="bg-white shadow-xl mx-auto py-4 px-8 shadow-gray-300 w-6/12 rounded-lg mb-4">
                <label className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
                <input type="text" name="user_name" required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                <input type="email" name="user_email" required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' />
                <label className='block text-gray-700 text-sm font-bold mb-2'>Issue</label>
                <textarea name="message" required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' />
                <button type="submit" className=' text-gray-100 bg-gradient-to-r from-emerald-500 to-indigo-500 py-3 px-7 text-base lg:text-xl font-Finlandica hover:ease-in-out duration-200 cursor-pointer hover:bg-gradient-to-l rounded-md'>Book an Appointment</button>
            </form>
        </div>
        </ContainerBlock>
    )
}

export default Doofenshmirtz