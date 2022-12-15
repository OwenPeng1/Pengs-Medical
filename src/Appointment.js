import React from 'react'
import {useState, useRef} from 'react'
import DatePicker from 'react-datepicker'
import TimePicker from "react-time-picker"
import emailjs from '@emailjs/browser'

function Appointment(){
const [name, setName] = useState("")
const [DOB, setDOB] = useState("")
const [dateAppointment, setDateAppointment] = useState(new Date())
const [timeAppointment, setTimeAppointment] = useState("9:00")
const [phoneNumber, setPhoneNumber] = useState("")


const form = useRef()
const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i6xko8a', 'template_26qcdqs', form.current, '0cJaCNCk1HbcEu4yh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }


return(
        <div className= "w-2/3 bg-sky-500 float-right h-screen">
            <form className = "mt-40 ml-40 space-x-10 space-y-10 basis-1/3 bg-sky-500 px-4"ref = {form} onSubmit = {sendEmail}>
                <div className="flex flex-col">
                    <label className="ml-10"> Name
                    <input
                        type = "text"
                        value = {name}
                        onChange = {(e) => setName(e.target.value)}
                        placeholder = "Name"
                        name = "name"
                        className=" block text-left"
                    />
                    </label>
                </div>
                <div className="flex flex-row">
                    <label className="inline-block float-left">Date of Appointment
                        <DatePicker className="block text-left" name = "date" selected = {dateAppointment} closeCalender={true} onChange = {(date) => setDateAppointment(date)}/>
                    </label>
                </div>
                <div className="flex flex-row">
                    <label className= " inline-block">Time of Appointment
                        <TimePicker className=" bg-white" name = "time" disableClock = {true} value = {timeAppointment} onChange = {setTimeAppointment}/>
                    </label>
                </div>
                <div className="flex flex-rowl">
                    <label className="inline-block" >Phone Number
                        <input
                            type = "text"
                            value = {phoneNumber}
                            onChange = {(e) => setPhoneNumber(e.target.value)}
                            placeholder = "Phone Number"
                            name = "phoneNumber"
                            className="inline-block"
                        />
                    </label>
                </div>
                <button className="block text-left bg-orange-500 text-white"type="submit">Submit</button>
                </form>
        </div>
    )
}

export default Appointment