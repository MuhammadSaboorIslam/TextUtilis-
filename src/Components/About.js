import React, {useState} from 'react'

export default function About() {
    const [myStyle , setMyStyle] = useState({
        color: "black",
        backgroundColor: "white"
    }
    )
    const [btnText, setBtnText] = useState("Enable Dark Mode")
    const toggleStyle = () => {
        if (myStyle.color === "white"){
            setMyStyle({
                color: "black",
                backgroundColor: "white" ,
            })
            setBtnText("Enable Dark Mode")
        } else {
            setMyStyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white"
            })
            setBtnText("Enable Light Mode")
        }
    }
  return (
    <div className='container' style={myStyle}>
        <h2 className='my-3'>About us 🙃</h2>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item" style={myStyle}>
            <h2 class="accordion-header">
            <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Functionality 🎓
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>This is a learning app.</strong> So don't except anything new or useful from this app. <a href="https://westescalante.com/">So Nothing here</a>. LOL
            </div>
            </div>
        </div>
        <div class="accordion-item" style={myStyle}>
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Example 👍
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div class="accordion-item" style={myStyle}>
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Creator 💪 
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>The Creator of this react app is Muhammad Saboor Islam.</strong> It is backed up on github with documentation continuisly. Mark a visit? <a href='https://github.com/MuhammadSaboorIslam'>github</a>
            </div>
        </div>
  </div>
  <div className="container my-4">
    <button type='button' onClick = {toggleStyle} className="btn btn-primary">{btnText}</button>
  </div>
</div> 
    </div>
  )
}
