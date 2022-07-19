import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

/** Creates all routes for pet app
 * 
 * Returns user to root route if wrong path
 */

function RoutesList({doglist}) {
  return (
    <Routes>
      <Route element={<DogList doglist={doglist}/>} path="/dogs" />
      <Route element= { <DogDetails doglist={doglist}/>} path="/dogs/:name" />
      <Route path="*" element={<Navigate to="/dogs" />} />
    </Routes>
  );
}

export default RoutesList;
