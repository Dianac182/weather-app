import React from "react";

const Form = props => (
  <form onSubmit={ props.getWeather }>
    <h1>This is my Form Component</h1>
    <input type="text" name="city" placeholder="City Name"/>
    <input type="text" name="country" placeholder="Country Name" />
    <button>Get Weather</button>
  </form>
);

export default Form;