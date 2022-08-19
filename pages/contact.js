import React from 'react'
import Navbar from '../components/Navbar'
import { useRef as UseRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer';
import Head from 'next/head';
const contact = () => {
    const form = UseRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9lx6u17', 'template_2hn2a5a', form.current, 'lqJYwfG4kFxV99VK8')
        .then((result) => {
            console.log(result.text);
            alert('Message Sent Sucessfully.')
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div>
            <Head>
                <title>Lyfe | Contact</title>
            </Head>
            <Navbar />
            <h1 className='pt-[8rem] text-3xl ml-[42rem]'>Contact Form</h1>
            <form ref={form} onSubmit={sendEmail} className='class="bg-white shadow-md rounded px-8 pt-6 pb-[8.6rem] mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
                <input type="text" name="user_name" required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                <input type="email" name="user_email" required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' />
                <label className='block text-gray-700 text-sm font-bold mb-2'>Message</label>
                <textarea name="message" required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' />
                <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Send</button>
            </form>
            <Footer />
        </div>
    )
}

export default contact