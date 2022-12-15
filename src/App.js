import './App.css';
import Header from './Header';
import {useState} from 'react'
import Home from './Home';
import About from './About';
import Contact from './Contact'
import Appointment from './Appointment';
import {Routes, Route} from 'react-router-dom'
import Footer from './Footer';



function App() {
const [tab, setTab] = useState("Home")

if(tab === "Home"){return(
  <div>
      <Header setTab = {setTab}/>
      <Home/>
      <Footer/>
  </div>
)
}
if(tab === "About"){
  return(
    <div>
      <Header setTab = {setTab} />
      <About/>
      <Footer/>
    </div>
  )
}
if(tab === "Contact"){
  return(
    <div>
      <Header setTab = {setTab} />
      <Contact/>
      <Footer/>
    </div>
  )
}
if(tab === "Appointment"){
  return(
    <div>
      <Header setTab = {setTab}/>
      <Appointment/>
      <Footer/>
    </div>
  )
}
}

export default App;
