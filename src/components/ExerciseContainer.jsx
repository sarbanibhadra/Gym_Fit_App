// Work in progress, please dont use it yet!! Thank you
import React, { useState } from 'react';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import Card from './Card';
import ExerciseSearchForm from './ExerciseSearchForm';
import ExerciseResult from './ExerciseResult';
import API from '../utils/API';

function ExerciseContainer() {
  const [searchData, setSearchData] = useState({
    search: '',
    results: [],
  });

  const searchExercise = (query) => {
    API.search(query)
      .then((res) => setSearchData({ ...searchData, results: res.data }))
      .catch((err) => console.log(err));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  // When the form is submitted, search the OMDB API for the value of `searchData.search`
  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchExercise(searchData.search);
  };

  return (
    <Container>
      <Row>
        <Col size="md-4">
          <Card heading="Search">
            <ExerciseSearchForm
              value={searchData.search}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col size="md-8">
          <Card
            heading={ExerciseSearchForm.results.Title || 'Search for an Exercise to Begin'}
          >
            {searchData.results.xxx ? (
              <ExerciseList
                title={searchData.results.Title}
                
              />
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Card>
        </Col> 
      </Row>
    </Container>
  );
}

export default ExerciseContainer;
