import React from 'react'
import {useNavigate} from 'react-router-dom'

function Header({setTab}){
    
function handleHome(){
    setTab("Home")
}
function handleAbout(){
    setTab("About")
}
function handleContact(){
    setTab("Contact")
}
function handleAppointment(){
    setTab("Appointment")
}
return(
    <div className="font-Merriweather">
        <h2 className="text-sky-500 text-3xl absolute top-10 left-20">Peng's Medical</h2>
        <div className= "text-1xl text-white space-x-4 absolute top-10 right-20">   
            <button onClick = {handleHome}>Home</button>
            <button onClick = {handleAbout}>About Us</button>
            <button onClick = {handleContact}>Business Hours</button>
            <button className = "bg-orange-500"onClick = {handleAppointment}>Book Appointment</button>
        </div>
    </div>
)
}
export default Header