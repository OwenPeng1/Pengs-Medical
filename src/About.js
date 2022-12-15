import React from 'react'
import Img from "./DoctorBaby.png"

function About(){

return(    
    <div className = "font-Merriweather">
        <div className = "w-1/3 float-left">
            <img className= "mx-auto my-40 w-2/3 h-1/2"src={Img}/>
        </div>
        <div className = " h-screen w-2/3 float-right text-align-center bg-cover h-200 bg-sky-500 text-white text-4xl" >
            <p className ="mx-auto my-40 container w-2/3 shrink-0 h-screen text-align-center bg-cover h-200 bg-sky-500 text-white text-4xl">
            Dr. Peng is a board certified pediatrician and has been practicing medicine for 20 years. Dr. Peng  can speak both Mandarin and English. Dr. Peng did his residency at Maimonides Medical Center, in the very neighborhood where he started his medical journey. Dr. Peng is committed to providing the highest quality medical care to his patients. 
            </p>
        </div>
    </div>
)
}

export default About