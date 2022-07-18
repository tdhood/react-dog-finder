import React, { useState } from "react";
// import { Navigate, Link } from 'react-router-dom';
import axios from "axios";

function DogList({doglist}) {


  return (
    <div>
      {doglist.map((dog,idx) => (
        <div key={idx}>
          <h3>{dog.name}</h3>
          <img src={`../public/${dog.src}.jpg`}></img>
        </div>
      ))}
    </div>
  );
}

export default DogList;
