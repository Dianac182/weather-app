import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "697a0d74b2aefcd58a102c215968b9df";

class App extends React.Component {
  // Define states to track changes of data
  state = {
    // image_weather: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    temperature: undefined,
    min_temperature: undefined,
    max_temperature: undefined,
    error: undefined
  }

  // Method for calling the API and getting the data
  getWeather = async (e) => {
    // To prevent a full page refresh
    e.preventDefault();
    // To use the event object to access the values of the inputs
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    
    if(city && country){
      // Converting the data from API to JavaScript
      const data = await api_call.json();
      console.log(data);

      // Call setState method to update the state data
      this.setState({
        // image_weather: data.weather[0].icon,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        temperature: data.main.temp,
        min_temperature: data.main.temp_min,
        max_temperature: data.main.temp_max,
        error: ""
      });
    }else {
      this.setState({
        error: "Please enter the necessary inputs."
      });
    }
  }

  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather
          icon_weather={this.state.icon_weather}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          temperature={this.state.temperature}
          min_temperature={this.state.min_temperature}
          max_temperature={this.state.max_temperature}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
