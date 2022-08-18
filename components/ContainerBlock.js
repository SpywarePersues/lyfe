import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function ContainerBlock({ children }){
    return(
        <div className="">
            <div className="">
                <Navbar />
                { children }
                <Footer />
            </div>
        </div>
    )
}