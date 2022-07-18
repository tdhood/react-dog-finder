import './App.css';
import React, { useState } from "react";
// import Nav from "./Nav";
import RoutesList from "./RoutesList";
import axios from "axios";
import { BrowserRouter } from 'react-router-dom';

function App() {

  const [doglist, setDogList] = useState(["loading..."]);

  const BASE_URL = "http://localhost:5001/dogs";

  async function getDogs() {
    const dogs = await axios.get(BASE_URL);
    setDogList(st => dogs);
  }
  return (
    <div className="App">
       <BrowserRouter>
        {/* <Nav /> */}
        <RoutesList data={doglist} />
      </BrowserRouter>
    </div>
  );
}

export default App;
