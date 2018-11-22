import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        <h1>This is my Weather Component</h1>
        <div>
          {/* { this.props.city && this.props.country && <img alt="Ilustration of the weather">{ this.props.image_weather }</img> } */}
          { this.props.city && this.props.country && <p>Location: { this.props.city }, { this.props.country }</p> }
          { this.props.description && <p>Condition: { this.props.description }</p> }
          { this.props.temperature && <p>Temperature: { this.props.temperature }</p> }
          { this.props.min_temperature && <p>Min. Temperature: { this.props.min_temperature }</p> }
          { this.props.max_temperature && <p>Max. Temperature: { this.props.max_temperature }</p> }
          { this.props.error && <p>Error: { this.props.error }</p> }
        </div>
      </div>
    );
  }
};

export default Weather;