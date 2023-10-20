import React, {useState} from "react";
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const uppercase = () =>{
        // console.log("uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleChange = (event) => {
        //console.log("object");
        setText(event.target.value)
    }
    const lowercase = () =>{
        let newwText = text.toLowerCase();
        setText(newwText);
    }
    const clear = (event) =>{
        setText("");
    }
    const speak = ()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const alternateText = () =>{
        const arr = text.split("");
        let newText = "";
        let case_ = 0
        for (let i = 0 ; i < arr.length ; i++){
            if (case_ == 0){
                newText += arr[i].toLowerCase()
                case_ = 1
            } else {
                case_ = 0
                newText += arr[i].toUpperCase()
            }
        }
        setText(newText)
    }
    const capitalize = () =>{
        let lines = text.split(".")
        let newtext = ""
        for (let i = 0 ; i < lines.length ; i++){
            let index = 0
            while(lines[i][index] == " "){
                index++
            }
            for (let j = 0 ; j < index ; j++){
                newtext += " "
            }
            try {
                newtext += lines[i][index].toUpperCase();
            }catch (error){
                console.log(error)
            }
            newtext += lines[i].slice(index+1)
            if (i != (lines.length)-1){
                newtext += "."
            }
            
        }
        setText(newtext)
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <div style={{color:props.mode==="light" ? "black" : "white"}} className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBoxx"
          rows="8"
          value={text}
          onChange={handleChange}
          style={{
            backgroundColor : props.mode==="light" ? "#edf2f5" : "#2f3336",
            color: props.mode==="light" ? "black" : "white",
          }}
        ></textarea>
      </div>
      <button type="button" onClick={uppercase} className="btn btn-primary ">Convert to UpperCase</button>
      <button type="button" onClick={lowercase} className="btn btn-primary mx-3">Convert to LowerCase</button>
      <button type="button" onClick={clear} className="btn btn-primary mx-2">Clear Text</button>
      <button type="button" onClick={speak} className="btn btn-primary mx-2">Speak 🔊</button>
      <button type="button" onClick={alternateText} className="btn btn-primary mx-2">Alternating Case </button>
      <button type="button" onClick={capitalize} className="btn btn-primary mx-2">Capitalize Case </button>
    </div>
    <div className="container my-3" style={{color:props.mode==="light" ? "black" : "white"}}>
        <h1>
            Your Text Summary:
        </h1>
        <p>
            {text.split(" ").length} Words, {text.length} Characters & {text.split("\n").length} Lines
        </p>
        { text.split(" ").length * 0.008 <= 1 ? (
            <p>{text.split(" ").length * 0.008 * 60} Seconds Read</p>
        ) : (
            <p>{text.split(" ").length * 0.008} Minutes Read</p>
        )}
        <h2>Preview:</h2>
        <p>{text.length>0 ? text : "Enter something above to preview here !"}</p>
    </div>
    </>
  );
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
}
TextForm.defaultProps = {
    heading: "Prop for heading",
}
