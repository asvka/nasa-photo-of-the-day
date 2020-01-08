import React from "react";
import "./App.css";
// import axios from "axios";
// import { Card } from "react-bootstrap";
// import PhotoCard from "./components/PhotoCard/PhotoCard";
// import PhotoList from "./components/PhotoList/PhotoList.js";
import Card from "./components/card"

// axios
//   .get('https://api.nasa.gov/planetary/apod?api_key=xogsnInRUlQ4TuM9Am7dg1Txz8TWBFd0fadZv1aa')
//     .then ((res) =>{
//       console.log(res);
//     })
//     .catch ((err) => {
//       console.log("Error loading data!", err);
//     })
function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
