import React from "react";
import { useParams } from "react-router-dom";

/** Show all information about a Dog
 *
 *  Props:
 *  - doglist
 */

function DogDetails({ doglist }) {
  console.log("doglist", doglist);
  const params = useParams();

  const dog = doglist.filter((dog) => dog.name === params.name);
  console.log("dog", dog);

  return (
    <div>
      <h1>{dog[0].name}</h1>
      <h3>{dog[0].name} is {dog[0].age} years old</h3>
      <img src={`/${dog[0].src}.jpg`}></img>
      {dog[0].facts.map((fact) => (<div> {fact} </div>
      ))}
    </div>
  );
}

export default DogDetails;
