import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        <h1>This is my Weather Component</h1>
        <div>
          <p>{this.props.icon_weather}</p>
          <p>Location: {this.props.city}, {this.props.country}</p>
          <p>{this.props.description}</p>
          <p>Temperature: {this.props.temperature}</p>
          <p>Min. Temperature: {this.props.min_temperature}</p>
          <p>Max. Temperature: {this.props.max_temperature}</p>
          <p>Error: {this.props.error}</p>
        </div>
      </div>
    )
  }
}

export default Weather;