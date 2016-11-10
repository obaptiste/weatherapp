import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var ReactDOM = require('react-dom');
var classNames = require('classnames');
var Api = require('./utils/api');

var query = ''; // Expects something like this ?city=London,Paris,Berlin,Madrid
var cities = []; // Transform query string cities into an array
var citiesWeather = []; // API cache
var currentCity = 0; // Index of current city displayed



class App extends Component {

var Weather = React.createClass({
    // Init data for UI
    getInitialState: function() {
      return {
          weather: '',
          temp: 0,
          humidity: 0,
          wind: 0
      }  
    },
    render: function() {
// Build class names with dynamic data
var weatherClass = classNames('wi wi-owm-' + this.state.weather);
var bgColorClass = 'weather-widget '; // very-warm, warm, normal, cold, very-cold

// Set the background colour based on the temperature
if (this.state.temp >= 30) {
    bgColorClass += 'very-warm';
}
else if (this.state.temp > 20 && this.state.temp < 30) {
    bgColorClass += 'warm';
}
else if (this.state.temp > 10 && this.state.temp < 20) {
    bgColorClass += 'normal';
}
else if (this.state.temp > 0 && this.state.temp < 10) {
    bgColorClass += 'cold';
}
else if (this.state.temp <= 0) {
    bgColorClass += 'very-cold';
}

// Render the DOM elements
return <div className={bgColorClass}>
    <h1 className="city">{cities[currentCity]}</h1>
    <div className="weather">
        <i className={weatherClass}></i>
    </div>
    <section className="weather-details">
        <div className="temp"><span className="temp-number">{this.state.temp}</span><span className="wi wi-degrees"></span></div>
        <div className="humidity"><i className="wi wi-raindrop"></i>{this.state.humidity} %</div>
        <div className="wind"><i className="wi wi-small-craft-advisory">{this.state.wind} <span className="vel">Km/h</span></div>
    </section>
</div>
    }
});

// Assign the React component to a DOM element
var element = React.createElement(Weather, {});
ReactDOM.render(element, document.querySelector('.container'));
    );
  }
}

export default App;
