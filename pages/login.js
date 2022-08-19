import react, { useEffect, useState } from "react";
import { app } from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login(){
    const [token, setToken] = useState("")
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const router = useRouter()

    const signUpWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((response) => {
            sessionStorage.setItem('Token', response.user.accessToken)
            sessionStorage.setItem('Name', response.user.displayName)
            sessionStorage.setItem('PFP', response.user.photoURL)
            router.reload()
        })
    }

    const signUpWithGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then((response) => {
            sessionStorage.setItem('Token', response.user.accessToken)
            sessionStorage.setItem('Name', response.user.displayName)
            sessionStorage.setItem('PFP', response.user.photoURL)
            router.reload()
        })
    }

    useEffect(() => {
        setToken(sessionStorage.getItem('Token'))
    }, [])

    const manageSignOut = () => {
            sessionStorage.clear()
            router.reload()
    }

    return(
        <div>
            <Head>
                <title>Lyfe | Login/Register</title>
            </Head>
            <style jsx>{`
                .login-container {
                    margin-left: 29rem;
                }
            `}</style>
                <Navbar />
            {token ? (
                <div className="user-container items-center w-6/12 mb-20 mx-auto flex justify-center pt-[16rem] pb-[5.9rem]">
                    <div>
                        <img className="rounded-lg"  src={sessionStorage.getItem("PFP")} style={{width:"200px"}}/>
                    </div>  
                    <div className="px-10">
                        <p>Hello, {sessionStorage.getItem("Name")}</p>
                        <p className="pt-2">Welcome to Lyfe.</p>
                        <button className="text-center text-gray-200 bg-black px-10 py-2 rounded-lg my-10 dark:bg-gray-400" onClick={manageSignOut}>Logout</button>
                    </div>
                </div>
            ) : (<div className="text-center justify-evenly w-6/12 mx-auto mb-24 lg:flex pt-[20rem] pb-[10.9rem]">
            <button className="button bg-blue-500 shadow-lg shadow-blue-400 hover:bg-blue-700 ring-offset-2 ring-2 text-white font-bold py-2 px-4 rounded-full" onClick={signUpWithGoogle}>Sign Up with Google</button>
            <button className="button bg-violet-500 shadow-lg shadow-purple-400 hover:bg-purple-700 ring-offset-2 ring-2 text-white font-bold py-2 px-4 rounded-full" onClick={signUpWithGithub}>Sign Up with Github</button></div>)}
            <Footer />
        </div>
    )
}