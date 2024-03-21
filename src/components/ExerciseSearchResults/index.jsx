import React from "react";
import "./style.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ExSearchResults(props) {
  console.log(props.results)
  return (
    <Row xs={1} md={2} className="g-4">
      {props.results.map(result => (
        <Col key={result.id}>
        <Card style={{ width: '35rem', height: '18rem' }} >
          <Card.Body>
            <Card.Title>{result.name}</Card.Title>
            <Card.Text>
              <ul>  
                {result.instructions.map( obj => (
                  <li key={obj.order}>
                  {obj.description}
                  </li>
                ))}
              </ul>
            </Card.Text>
          </Card.Body>
          {/* <img alt="Dog" src={result} className="img-fluid" /> */}
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ExSearchResults;
