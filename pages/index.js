import React from "react"
import ContainerBlock from '../components/ContainerBlock'

export default function Home() {
  return (
    <ContainerBlock className="">
      <img src="./wallpaper.jpg" className="-z-10 absolute brightness-50 blur-sm lg:h-auto h-[80vh]"/>
      <div className="w-9/12 mx-auto lg:py-36 py-20">
        <p className="text-8xl text-teal-400 font-[Finlandica] font-bold">Get Well Soon...</p>
        <p className="text-gray-100 font-Finlandica font-bold text-6xl py-5">With L<span className="text-teal-400">y</span>fe</p>
      </div>
      <div>
        <div className="w-9/12 mx-auto drop-shadow-2xl flex flex-wrap justify-around">
          <div className="box shadow-lg my-5 lg:my-0 rounded-sm border-dashed border-2 border-cyan-300 shadow-gray-400 w-80 h-60 flex flex-col text-center justify-center p-5 bg-gray-200">
            <img src="./signup.png" width={50} className="mx-auto"/>
            <p className="text-teal-400">Sign Up</p>
            <p>Users can register using their Email ID, Phone Number, or Social Media Account</p>
          </div>
          <div className="box shadow-lg my-5 lg:my-0 rounded-sm border-dashed border-2 border-cyan-300 shadow-gray-400 w-80 h-60 flex flex-col text-center justify-center p-5 bg-gray-200">
            <img src="./Calender.png" width={50} className="mx-auto"/>
            <p className="text-teal-400">Book Appointment</p>
            <p>Talk to our assistants and easily book your appointment through our user friendly UI</p>
          </div>
          <div className="box shadow-lg my-5 lg:my-0 rounded-sm border-dashed border-2 border-cyan-300 shadow-gray-400 w-80 h-60 flex flex-col text-center justify-center p-5 bg-gray-200">
            <img src="./doctor.png" width={50} className="mx-auto"/>
            <p className="text-teal-400">Get Well Soon</p>
            <p>The best doctors and medical practitioners offer consultancy and treatment online.</p>
          </div>
        </div>
      </div>
      <div className="bg-[#12E5D8] pt-20 mt-20">
        <div className="flex flex-wrap-reverse justify-around lg:w-10/12 w-11/12 mx-auto lg:mx-0">
          <img src="./doctor-lg.png" />
          <div className="">
            <p className="text-5xl text-gray-100 font-Finlandica font-bold py-5">Register as a Doctor</p>
            <p className="font-semibold italic">Medicine cure diseases but only doctors can cure patients.</p>
            <p className="text-2xl text-gray-100 font-Finlandica font-bold">We are <span className="underline underline-offset-4">open for doctors</span> in all categories.</p>
            <ul className="text-gray-100 py-10 text-xl font-semibold">
              <li>1. Send your resume to <span className="underline underline-offset-4">lyfe2022@gmail.com</span></li>
              <li>2. If shortlisted you will be called for an interview session.</li>
            </ul>
            <a className="my-20 text-gray-100 bg-gradient-to-r from-emerald-500 to-indigo-500 py-3 px-7 text-3xl font-Finlandica hover:ease-in-out duration-200 cursor-pointer hover:bg-gradient-to-l">Register now</a>
          </div>
        </div>
      </div>
    </ContainerBlock>
  )
}
