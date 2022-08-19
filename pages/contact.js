import React from 'react'
import Navbar from '../components/Navbar'
import { useRef as UseRef } from 'react';
import emailjs from '@emailjs/browser';

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
            <Navbar />
            <h1 className='pt-24'>Contact Form</h1>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default contact