import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/textForm";
import React,{useState} from 'react'


function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () =>{
    if(mode=="dark"){
      setMode("light")
      document.body.style.backgroundColor = "#edf2f5";
    } else {
      setMode("dark")
      document.body.style.backgroundColor = "#2f3336";
    }
  }
  return (
    <>
      <Navbar title="TextUtilis" aboutText="About Us" mode={mode} toggleMode = {toggleMode}/>
      <div className="container-fluid my-4">
        <TextForm heading="Enter your text" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
