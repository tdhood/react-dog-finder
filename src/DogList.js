import React from "react";
import { Link } from 'react-router-dom';

/**
 * Props:
 * -doglist : [{name, age, src, [facts]}, ...]
 * 
 * App -> RouteList -> DogList
 */
function DogList({ doglist }) {
  console.log("DogList", doglist);

  return (
    <div>
      {doglist.map((dog, idx) => (
        <Link key={idx} to={`/dogs/${dog.name}`}>
          <div>
            <h3>{dog.name}</h3>
            <img src={`/${dog.src}.jpg`}></img>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default DogList;
