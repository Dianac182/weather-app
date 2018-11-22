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
  // Method for calling the API and getting the data
  getWeather = async (e) => {
    // To prevent a full page refresh
    e.preventDefault();
    // To use the event object to access the values of the inputs
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    // Converting the data from API to JavaScript
    const data = await api_call.json();
    console.log(data);
  } 
  
  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather/>
      </div>
    );
  }
}

export default App;
