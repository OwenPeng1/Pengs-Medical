import React from 'react'
import Img from "./Toddler.png"

function Home(){
  
return(
    <div className = "font-Merriweather">
    <div className = "w-1/3 float-left">
        <img className= "mx-auto my-40 w-2/3 h-1/2"src={Img}/>
    </div>
   <div className = "h-screen w-2/3 bg-sky-500 float-right">
        
        <p className = " my-40 h-screen w-2/3 mx-auto text-align-center bg-cover h-200 bg-sky-500 text-white text-4xl">
        Peng’s Medical is located in the heart of 8th avenue. We have been providing high quality pediatric care for 14 years. At Peng’s Medical you are more than a patient, you are part of the Peng’s Medical family. Dr. Peng provides personalized care for all of his patients, and when you are here you will feel like family. Bring your child here for checkups, vaccines, and any other medical concerns. 
        </p>
    </div>
    </div>
)
}

export default Home