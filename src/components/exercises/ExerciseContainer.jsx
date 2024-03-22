// Work in progress, please dont use it yet!! Thank you
import React, { useState } from 'react';
import Container from '../Container';
import ExSearchForm from '../ExerciseSearchForm';
import ExSearchResults from  '../ExerciseSearchResults';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
    const response = await API.searchExercises(event.target.value)

        console.log("res" , response)
        if (response.status === 'error') {
          throw new Error(response.data.message);
        }
        const cleanData = [];
        for (const obj of response.data) {
          console.log(obj)
          const ress = await API.getExerciseById(obj.id)
          const imageEx = await API.getExerciseImage(obj.name + ' exercise')
          console.log(imageEx)
          cleanData.push({...obj, instructions: ress.instructions, images: imageEx.value[2].contentUrl})   
          console.log(cleanData)       
        }
        setSearchData({ ...searchData, results: cleanData  , error: '' });
  };

  return (
    <div style={{marginTop: "4%"}}>
      <Container style={{ minHeight: '50%', minWidth: '40%'}} >
      <Row>
        <Col>
        <h1 className="text-center">Search By Exercise</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
        <ExSearchForm
          handleInputChange={handleInputChange}
          exercise={searchData.exercise} />
        </Col>
        <Col sm={9}>
        <ExSearchResults results={searchData.results} />
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default ExerciseContainer;
