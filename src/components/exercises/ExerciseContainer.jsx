// Work in progress, please dont use it yet!! Thank you
import React, { useState } from 'react';
import Container from '../Container';
import ExSearchForm from '../ExerciseSearchForm';
import ExSearchResults from  '../ExerciseSearchResults';
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
    
    const res = await API.searchExercises(event.target.value)
      // .then((res) => {
        if (res.data.status === 'error') {
          throw new Error(res.data.message);
        }
        const cleanData = [];
        for (const obj of res.data) {
          const ress = await API.getExerciseById(obj.id)
          //const image = await API.getExerciseImage(obj.name)
          cleanData.push({...obj, instructions: ress.instructions})          
        }
        setSearchData({ ...searchData, results: cleanData  , error: '' });
  };

  return (
    <div style={{marginTop: "5%", marginBottom: "3%" }}>
      <Container style={{ minHeight: '50%', minWidth: '40%'}} >
      <Row>
        <Col>
        <h1 className="text-center">Search By Exercise</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
        <ExSearchForm
          handleInputChange={handleInputChange}
          exercise={searchData.exercise} />
        </Col>
        <Col sm={8}>
        <ExSearchResults results={searchData.results} />
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default ExerciseContainer;
