import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/textForm";
import React,{useState} from 'react'


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 15000);
  }
  const toggleMode = () =>{
    if(mode=="dark"){
      setMode("light")
      document.body.style.backgroundColor = "#edf2f5";
      showAlert("Light Mode enabled" , 'success')
    } else {
      setMode("dark")
      document.body.style.backgroundColor = "#2f3336";
      showAlert("Dark mode enabled " , "success")
    }
  }
  return (
    <>
      <Navbar title="TextUtilis" aboutText="About Us" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container-fluid my-4">
        <TextForm heading="Enter your text" showAlert = {showAlert} mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
