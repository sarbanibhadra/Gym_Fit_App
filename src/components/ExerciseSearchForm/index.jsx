import React from 'react';
import fb from './fullbody.jpg'
import './style.css';

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function ExerciseSearchForm(props) {
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
          <option value="Legs">Legs</option>
          <option value="Core">Core</option>
          <option value="Arms">Arms</option>
        </select>
      </div>
      <div>  
        <img src={fb} className="img-fluid" alt="Responsive image" width="30%" height="30%"/>
      </div>
    </form>
  );
}
export default ExerciseSearchForm;
