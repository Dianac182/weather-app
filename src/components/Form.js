import React from "react";

const Form = props => (
  <form onSubmit={ props.getWeather }>
    <div className="form-row">
      <div className="col-4">
        <input type="text" name="city" placeholder="City Name" className="form-control input-field"/>
      </div>
      <div className="col-4">
        <input type="text" name="country" placeholder="Country Name" className="form-control input-field"/>
      </div>
      <div className="col-3">
        <button type="button" className="btn btn-info">Get Weather</button>
      </div>
    </div>
  </form>
);

export default Form;