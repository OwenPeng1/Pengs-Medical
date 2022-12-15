
import React from 'react'
import Img from './ClinicMap.png'

function Contact() {
  return (
    <div className=" flex flex-row">
      <div className="w-1/3">
        <img className=" mx-auto my-auto my-auto w-2/3 h-1/2 bg-sky-500 text-white" src={Img} />
      </div>
      <div className=" text align center w-2/3 bg-sky-500 text-white h-screen">
        <div className="text-4xl absolute top-40 right-60">
          <h2>Call Us: 3472408482</h2>
          <div className="-mx-10 space-x-4">
            <span>Sunday</span>
            <span>Closed</span>
          </div>
          <div className="space-x-4">
            <span>Monday</span>
            <span>9:30AM - 6PM</span>
          </div>
          <div className="space-x-4">
            <span>Tuesday</span>
            <span>9:30AM - 5PM</span>
          </div>
          <div className="space-x-4">
            <span>Wednesday</span>
            <span>10AM - 5PM</span>
          </div>
          <div className="space-x-4">
            <span>Thursday</span>
            <span>Closed</span>
          </div>
          <div className="space-x-4">
            <span>Friday</span>
            <span>9:30AM - 6PM</span>
          </div>
          <div className="space-x-4">
            <span>Saturday</span>
            <span>9:30AM - 6PM</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact