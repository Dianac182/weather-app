// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";

import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "697a0d74b2aefcd58a102c215968b9df";

class App extends React.Component {
  getWeather = async () => {
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  } 
  
  render() {
    return (
      <div>
        <Title />
        <Form />
        <Weather/>
      </div>
    );
  }
}

export default App;
