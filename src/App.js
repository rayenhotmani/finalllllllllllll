import React , {useState} from "react";
import Dropdown from "./componment/Dropdown";
import Hero from "./componment/Hero";
import InfoSection from "./componment/InfoSection";
import Navbar from "./componment/Navbar";
import { InfoData } from "./data/InfoData";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyle";

function App() {
 const[isOpen , setIsOppen] = useState(false)

 const toggle = () =>{
   setIsOppen(!isOpen)
 }

  return (
   <>
   <GlobalStyle/>
   <Navbar toggle={toggle} />
   <Dropdown isOpen={isOpen} toggle={toggle} />
   <Hero slides={SliderData} />
   <InfoSection {...InfoData} />
   
   </>
  );
}

export default App;
