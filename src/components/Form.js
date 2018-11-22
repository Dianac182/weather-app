import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <h1>This is my Form Component</h1>
        <input type="text" name="city" placeholder="City Name"/>
        <input type="text" name="country" placeholder="Country Name" />
        <button>Get Weather</button>
      </form>
    )
  }
}

export default Form;