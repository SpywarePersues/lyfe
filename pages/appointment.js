import React, { useState as UseState, useEffect as UseEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Head from 'next/head'

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
            <Navbar />
            {token ? (<div className=''>            
                <h1 className='pt-[8rem] text-4xl pl-[39rem] underline'>Available Doctors</h1>
                <div className='grid grid-cols-4 mt-[4rem]'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><Link href='/appointments/Allergists'>Allergists/Immunologists</Link></div>
                <p className="text-gray-700 text-base">
                They treat immune system disorders such as asthma, eczema, food allergies, insect sting allergies, and some autoimmune diseases.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dr. Chunkey Pandey</span>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><Link href='/appointments/Anesthesiologists'>Anesthesiologists</Link></div>
                <p className="text-gray-700 text-base">
                These doctors give you drugs to numb your pain or to put you under during surgery, childbirth, or other procedures. They monitor your vital signs while you’re under anesthesia.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dr. Reyna Singh</span>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><Link href='/appointments/Cardiologists'>Cardiologists</Link></div>
                <p className="text-gray-700 text-base">
                They’re experts on the heart and blood vessels. You might see them for heart failure, a heart attack, high blood pressure, or an irregular heartbeat.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dr. Jatin Kumar</span>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><Link href='/appointments/Dermatologists'>Dermatologists</Link></div>
                <p className="text-gray-700 text-base">
                Have problems with your skin, hair, nails? Do you have moles, scars, acne, or skin allergies? Dermatologists can help.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dr. Peter Zuckerberg</span>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><Link href='/appointments/Endocrinologists'>Endocrinologists</Link></div>
                <p className="text-gray-700 text-base">
                These are experts on hormones and metabolism. They can treat conditions like diabetes, thyroid problems, infertility, and calcium and bone disorders.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dr. Sage gates</span>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><Link href='/appointments/Gastroenterologists'>Gastroenterologists</Link></div>
                <p className="text-gray-700 text-base">
                They’re specialists in digestive organs, including the stomach, bowels, pancreas, liver, and gallbladder. You might see them for abdominal pain, ulcers, diarrhea, jaundice, or cancers in your digestive organs. They also do a colonoscopy and other tests for colon cancer
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dr. Annanya Pandey</span>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><Link href='/appointments/Hematologists'>Hematologists</Link></div>
                <p className="text-gray-700 text-base">
                These are specialists in diseases of the blood, spleen, and lymph glands, like sickle cell disease, anemia, hemophilia, and leukemia.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dr. Bhagat Singh</span>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><Link href='/appointments/Internists'>Internists</Link></div>
                <p className="text-gray-700 text-base">
                These primary-care doctors treat both common and complex illnesses, usually only in adults. You’ll likely visit them or your family doctor first for any condition. Internists often have advanced training in a host of subspecialties, like heart disease, cancer, or adolescent or sleep medicine. With additional training (called a fellowship), internists can specialize in cardiology, gastroenterology, endocrinology, nephrology, pulmonology, and other medical sub-specialties.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dr. Chow Un kum</span>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><Link href='/appointments/Nephrologists'>Nephrologists</Link></div>
                <p className="text-gray-700 text-base">
                They treat kidney diseases as well as high blood pressure and fluid and mineral imbalances linked to kidney disease.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dr. Doctor Gandhi</span>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><Link href='/appointments/Neurologists'>Neurologists</Link></div>
                <p className="text-gray-700 text-base">
                These are specialists in the nervous system, which includes the brain, spinal cord, and nerves. They treat strokes, brain and spinal tumors, epilepsy, Parkinsons disease, and Alzheimers disease.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dr. SpywarePerseus Ghosh</span>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><Link href='/appointments/Oncologists'>Oncologists</Link></div>
                <p className="text-gray-700 text-base">
                These internists are cancer specialists. They do chemotherapy treatments and often work with radiation oncologists and surgeons to care for someone with cancer.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dr. Cloud Sharma</span>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><Link href='/appointments/Ophthalmologists'>Ophthalmologists</Link></div>
                <p className="text-gray-700 text-base">
                You call them eye doctors. They can prescribe glasses or contact lenses and diagnose and treat diseases like glaucoma. Unlike optometrists, they’re medical doctors who can treat every kind of eye condition as well as operate on the eyes.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dr. Weird Kumar</span>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><Link href='/appointments/Otolaryngologists'>Otolaryngologists</Link></div>
                <p className="text-gray-700 text-base">
                They treat diseases in the ears, nose, throat, sinuses, head, neck, and respiratory system. They also can do reconstructive and plastic surgery on your head and neck.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dr. Nishant Kumar</span>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><Link href='/appointments/Pathologists'>Pathologists</Link></div>
                <p className="text-gray-700 text-base">
                A pathologist is a medical healthcare provider who examines bodies and body tissues. He or she is also responsible for performing lab tests.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dr. B.R Ambedkar</span>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><Link href='/appointments/Physiatrists'>Physiatrists</Link></div>
                <p className="text-gray-700 text-base">
                These specialists in physical medicine and rehabilitation treat neck or back pain and sports or spinal cord injuries as well as other disabilities caused by accidents or diseases.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dr. Netaji Shubash Kundra Boss</span>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><Link href='/appointments/Podiatrists'>Podiatrists</Link></div>
                <p className="text-gray-700 text-base">
                They care for problems in your ankles and feet. That can include injuries from accidents or sports or from ongoing health conditions like diabetes. Some podiatrists have advanced training in other subspecialties of the foot.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dr. Sardar Bhai Bhai Patel</span>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><Link href='/appointments/Psychiatrists'>Psychiatrists</Link></div>
                <p className="text-gray-700 text-base">
                These doctors work with people with mental, emotional, or addictive disorders. They can diagnose and treat depression, schizophrenia, substance abuse, anxiety disorders, and sexual and gender identity issues. Some psychiatrists focus on children, adolescents, or the elderly.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dr. Sova Cook</span>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><Link href='/appointments/Pulmonologists'>Pulmonologists</Link></div>
                <p className="text-gray-700 text-base">
                You would see these specialists for problems like lung cancer, pneumonia, asthma, emphysema, and trouble sleeping caused by breathing issues.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dr. Sundar Ram Pichai</span>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><Link href='/appointments/Radiologists'>Radiologists</Link></div>
                <p className="text-gray-700 text-base">
                They use X-rays, ultrasound, and other imaging tests to diagnose diseases. They can also specialize in radiation oncology to treat conditions like cancer.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dr. Laura Jassy</span>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><Link href='/appointments/Rheumatologists'>Rheumatologists</Link></div>
                <p className="text-gray-700 text-base">
                They specialize in arthritis and other diseases in your joints, muscles, bones, and tendons. You might see them for your osteoporosis (weak bones), back pain, gout, tendinitis from sports or repetitive injuries, and fibromyalgia.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dr. Shyam Singh</span>
            </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><Link href='/appointments/Urologists'>Urologists</Link></div>
                <p className="text-gray-700 text-base">
                These are surgeons who care for men and women for problems in the urinary tract, like a leaky bladder. They also treat male infertility and do prostate exams.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dr. Chamber Sharma</span>
            </div>
            </div>
            </div>
            </div>) : (<h1 className='pt-[20rem] text-3xl ml-[28rem] pb-[17.15rem]'>You have to <span className='text-emerald-800 underline'><Link href="/login">login</Link></span> first to get access to this page.</h1>)}
            <Footer />
        </div>
    )
}

export default appointment