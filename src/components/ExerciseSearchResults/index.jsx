import React from "react";
import "./style.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ExSearchResults(props) {
  console.log(props.results)
  return (
    <Row xs={1} md={2} className="g-4">
      {props.results.map(result => (
        <Col key={result.id}>
        {/* <Card style={{ width: '25rem', height: '30rem' }} border="info" >
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
        </Card> */}
          <div ClassName="card shadow p-3 mb-5 bg-white rounded" style={{width: '25rem', height: '30rem', borderRadius: '8px', backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/002.webp')"}}>
            <div ClassName="card-body p-3 text-white">
              <h5 class="card-title">{result.name}</h5>
              <p class="card-text">
              <ol>  
                {result.instructions.map( obj => (
                  <li className="listPadding" key={obj.order}>
                  {obj.description}
                  </li>
                ))}
              </ol>
              </p>
            </div>
          </div>
          {/* <img alt="Dog" src={result} className="img-fluid" /> */}
        </Col>
      ))}
    </Row>
  );
}

export default ExSearchResults;
