import React from 'react'
import Navbar from '../components/Navbar'
import { useRef as UseRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer';
import Head from 'next/head';
import ContainerBlock from '../components/ContainerBlock';
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
        <ContainerBlock>
            <div className='py-40'>
                <Head>
                    <title>Lyfe | Contact</title>
                </Head>
                <h1 className='text-3xl text-center font-Finlandica font-bold'>Contact Form</h1>
                <form ref={form} onSubmit={sendEmail} className="bg-white shadow-xl mx-auto py-4 px-8 shadow-gray-300 lg:w-6/12 w-9/12 rounded-lg">
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
                    <input type="text" name="user_name" required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                    <input type="email" name="user_email" required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' />
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Message</label>
                    <textarea name="message" required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' />
                    <div className='text-center'>
                        <button type="submit" className='mx-auto text-gray-100 bg-gradient-to-r from-emerald-500 to-indigo-500 py-3 px-10 text-base lg:text-xl font-Finlandica hover:ease-in-out duration-200 cursor-pointer hover:bg-gradient-to-l rounded-md'>Send</button>
                    </div>
                </form>
            </div>
        </ContainerBlock>
    )
}

export default contact