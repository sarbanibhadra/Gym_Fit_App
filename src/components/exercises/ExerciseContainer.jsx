// Work in progress, please dont use it yet!! Thank you
import React, { useState } from 'react';
import Container from  '../Container';
import Row from '../Row';
import Col from '../Col';
import Card from '../Card';
import ExerciseSearchForm from '../ExerciseSearchForm';
import ExSearchResults from  '../ExerciseSearchResults';

import API from '../../utils/GymFitService';
//const API = require('../utils/GymFitService');

function ExerciseContainer() {
  const [searchData, setSearchData] = useState({
    search: '',
    results: [],
    error: '',
  });

  const handleInputChange = async (event) => {
    event.preventDefault();
    
    const res = await API.searchExercises(event.target.value)
      // .then((res) => {
        if (res.data.status === 'error') {
          throw new Error(res.data.message);
        }
        const cleanData = [];
        for (const obj of res.data) {
          const ress = await API.getExerciseById(obj.id)
          cleanData.push({...obj, instructions: ress.instructions})          
        }
        setSearchData({ ...searchData, results: cleanData  , error: '' });
  };

  return (
    <div>
      <Container style={{ minHeight: '50%', minWidth: '40%'}} >
        <h1 className="text-center">Search By Exercise</h1>
        <ExerciseSearchForm
          //handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          exercise={searchData.exercise}
        />
        <ExSearchResults results={searchData.results} />
      </Container>
    </div>
  );
}

export default ExerciseContainer;
