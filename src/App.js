import './App.css';
import React, { useState } from "react";
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import axios from "axios";
import { BrowserRouter } from 'react-router-dom';

const BASE_URL = "http://localhost:5001/dogs";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [doglist, setDogList] = useState([]);


  async function getDogs() {
    const dogs = await axios.get(BASE_URL);
    setDogList(st => dogs.data);
    setIsLoading(false)
  }

  if (isLoading){
    getDogs();
    return(
      <h1>Loading...</h1>
    )
  }
  


  return (
    <div className="App">
       <BrowserRouter>
        <Nav doglist={doglist}/>
        <RoutesList data={doglist} />
      </BrowserRouter>
    </div>
  );
}

export default App;
