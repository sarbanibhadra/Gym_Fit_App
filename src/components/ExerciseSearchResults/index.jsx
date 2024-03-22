import React from "react";
import "./style.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ExSearchResults(props) {
  console.log(props.results);
  
  return (
    <Row xs={1} md={2} className="g-4">
      {props.results.map(result => (
        <Col key={result.id}>
        <Card ClassName="img-fluid shadow" style={{ width: '28rem', height: '40rem' }} border="info" >
          <img ClassName="card-img-top img-fluid" src={result.images} alt="Card image not available" style={{maxWidth: "100%", maxHeight: "50%"}}/>
          <Card.Body ClassName="card-img-overlay">
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
        </Card>
          {/* <div ClassName="card img-fluid shadow" style={{width: '30rem', height: '40rem'}}>
          <img ClassName="card-img-top" src={result.images} alt="Card image" style={{width: "100%"}}/>
            <div ClassName="card-img-overlay">
              <h4 ClassName="card-title">{result.name}</h4>
              <p ClassName="card-text">
              <ul>  
                {result.instructions.map( obj => (
                  <li key={obj.order}>
                  {obj.description}
                  </li>
                ))}
              </ul>
              </p>
            </div>
          </div> */}
          {/* <img alt="Dog" src={result} className="img-fluid" /> */}
        </Col>
      ))}
    </Row>
  );
}

export default ExSearchResults;
