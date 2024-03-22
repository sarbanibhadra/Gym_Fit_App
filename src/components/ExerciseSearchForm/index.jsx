import React from 'react';
import fb from './fullbody1.jpg'
import './style.css';

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function ExSearchForm(props) {
  return (
    <form className="search">
      <div>
        <select 
          value={props.search}
          onChange={props.handleInputChange}
          name="breed"
          list="breeds" 
          className="form-select" 
          aria-label="Default select example">
          <option defaultValue>Choose your exercise</option>
          <option value="Back">Back</option>
          <option value="Chest">Chest</option>
          <option value="Shoulders">Shoulders</option>
          <option value="Legs">Legs</option>
          <option value="Arms">Arms</option>
          <option value="Core">Core</option>
        </select>
      </div>
      <div className="mr-auto justify-content-center shadow p-3 mb-5 bg-white rounded">  
        <img src={fb} className="img-fluid " alt="Responsive image" 
          width="100%" height="60%"/>
      </div>
    </form>
  );
}
export default ExSearchForm;
