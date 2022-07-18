import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DogList from "./DogList";


function RoutesList({data}) {
  return (
    <Routes>
      <Route element={<DogList doglist={data}/>} path="/" />
      {/* <Route element= { <DogDetails />} path="/dogs/:name" /> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
