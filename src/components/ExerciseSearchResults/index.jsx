import React from "react";
import "./style.css";

function SearchResults(props) {
  console.log(props.results)
  return (
    <ul className="list-group search-results"> row
      {props.results.map(result => (
        <li key={result.id} className="list-group-item"> col-3
          <p>{result.name}</p>
          <ul> card-body 
            {result.instructions.map( obj => (
              <li key={obj.order}>
                {obj.description}
              </li>
            ))}
          </ul>
          {/* <img alt="Dog" src={result} className="img-fluid" /> */}
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
