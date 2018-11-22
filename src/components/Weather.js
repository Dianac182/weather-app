import React from "react";

const Weather = props => (
  <div>
    {/* { props.image_weather && <img alt="Ilustration of the weather">{ this.props.image_weather }</img> } */}
    { props.city && props.country && <p>Location: { props.city }, { props.country }</p> }
    { props.description && <p>Condition: { props.description }</p> }
    { props.temperature && <p>Temperature: { props.temperature }</p> }
    { props.min_temperature && <p>Min. Temperature: { props.min_temperature }</p> }
    { props.max_temperature && <p>Max. Temperature: { props.max_temperature }</p> }
    { props.error && <p>Error: { props.error }</p> }
    </div>
);

export default Weather;