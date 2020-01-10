import React from "react";
import "./App.css";
import Card2 from "./components/card2"
import styled from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid white;
  color: white;
  background-color: black;
  border-radius: 3px;
  outline: none;
  &:hover {
    background-color: white;
    color: black;
  }
`;


// button.addEventListener(('click', );

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
      <Card2 />
      <Button>Go Back In Time</Button>
    </div>
  );
}

export default App;
