import React from "react";
import { Link } from 'react-router-dom';

function DogList({ doglist }) {
  console.log("doglist", doglist);

  return (
    <div>
      {doglist.map((dog, idx) => (
        <Link to={`/dogs/${dog.name}`}>
          <div key={idx}>
            <h3>{dog.name}</h3>
            <img src={`/${dog.src}.jpg`}></img>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default DogList;
