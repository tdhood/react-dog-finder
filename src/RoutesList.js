import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";


function RoutesList({data}) {
  return (
    <Routes>
      <Route element={<DogList doglist={data}/>} path="/" />
      <Route element= { <DogDetails doglist={data}/>} path="/dogs/:name" />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
