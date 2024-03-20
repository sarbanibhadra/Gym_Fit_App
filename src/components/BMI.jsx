import React, {useState} from "react";
import "../styles/BMI.css"
import wolf from "../images/joshua-wilking-bgSKRrYFYxc-unsplash 1.jpg"
import cat from "../images/mathieu-odin-YeQIAysCP3w-unsplash.jpg"
import dog from "../images/lucrezia-carnelos-0liYTl4dJxk-unsplash.jpg"
import girl from "../images/alex-shaw-wJGhAhqvUaQ-unsplash.jpg"

function BMI() {

  const [weight,setWeight] = useState(0)
  const [height,setHeight] = useState(0)
  const [result,setResult] = useState("")
  const [text,setText] = useState("")


const handleFormSubmit = (event) => {
//   // Preventing the default behavior of the form submit (which is to refresh the page)
  event.preventDefault();

  if (weight && height) {
    let result = weight/(height * height)
    setResult(result.toFixed(1))
   
  }

  if (result < 18.5) {
    setText("Underweight");
  } else if (result > 18.5 && result < 25) {
    setText("Healthy weight");
  } else {
    setText("Overweight");
  }
}


let imgContainer = ""
  if (result > 1 && result < 18.5) {
    imgContainer = wolf
  } else if (result > 18.5 && result <= 25) {
    imgContainer = cat
  } else if (result > 25) {
    imgContainer = dog
  } else {
    imgContainer = girl
  }




  return (
   
    
    <div className="calculator">
      <h2 className="mainText">A journey towards healthier weight and lifestyle</h2>
      <div className="container">
        <div className="row gy-4 justify-content-center">

          <div className="col-6 col-sm-6 col-md-4 col-lg-3 p-3 bmi">
            <h3 className="bmiHeader">BMI Calculator</h3>

            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label for="InputWeight" className="form-label">Weight (kg)</label>
                <input value={weight} onChange={(e) => setWeight(e.target.value)}className="form-control" id="InputWeight" type="number" aria-describedby="emailHelp" />
              </div>
 
              <div className="mb-3">
                <label for="InputHeight" className="form-label">Height (m)</label>
                <input value={height} onChange={(e) => setHeight(e.target.value)} className="form-control" id="InputHeight" type="" />
              </div>

              <button type="submit" onClick={handleFormSubmit} className="btn btn-md btn-dark bmibtn" >Submit</button>
            </form>

            <div className="result">
              <h4 className="bmiHeader">Your BMI is: </h4>
              <h4 className="bmiHeader resultColor">{result} </h4>
              <h5 className="bmiHeader">{text}</h5>
            </div>
          </div>

          <div className="col-sm-12 col-md-8 col-lg-8 image">
            <img src={imgContainer} alt="" className="imgResult" width="100%" ></img>
          </div>



        </div>
      </div>
    </div>
    
  );
}

export default BMI;

