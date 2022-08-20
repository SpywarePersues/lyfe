import React, { useState as UseState, useEffect as UseEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Head from 'next/head'
import ContainerBlock from '../components/ContainerBlock'
import DocData from '../components/DocData'


const appointment = () => {
    const [token, setToken] = UseState("")

    UseEffect(() => {
        setToken(sessionStorage.getItem('Token'))
    }, [])
    return (
        <div>
            <Head>
                <title>Lyfe | Appointments</title>
            </Head>
            <ContainerBlock>
                {
                    token 
                    ?
                    <div className='py-40'>
                        <DocData />
                    </div> 
                    : 
                    <div>Please Login</div>
                }
            </ContainerBlock>
        </div>
    )
}

export default appointment