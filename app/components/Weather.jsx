var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function () {
		return {
			isLoading: false,
			errorMessage: undefined
		}
	},
	handleSearch: function (location) {
		var that = this;

		this.setState({
			isLoading: true,
			errorMessage: undefined,
			location: undefined,
			temp: undefined
		});

		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function (err) {
			that.setState({
				isLoading: false,
				errorMessage: err.message
			});
		});
	},
	// gets called once DOM loads with Weather.jsx
	componentDidMount: function () {
		// pull location out of URL query (the second "location" is the name of the query key)
		var location = this.props.location.query.location;

		// check to see query param "location" has a value and is a string
		if (location && location.length > 0 && typeof location ==='string') {
			this.handleSearch(location);
			// reset "location" value
			window.location.hash = '#/';
		}
	},
	// listen for changes in the URL, to change parent compoment state (Weather.jsx) and update props of children (WeatherMessage.jsx)
	componentWillReceiveProps: function (newProps) {
		var location = newProps.location.query.location;

		if (location && location.length > 0 && typeof location ==='string') {
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	},
	render: function () {
		// pull states off Weather module
		var {isLoading, temp, location, errorMessage} = this.state;

		function renderMessage () {
			if (isLoading) {
				return <h3 className="text-center">Fetching weather...</h3>
			} else if (temp && location) {
				return <WeatherMessage temp={temp} location={location}/>
			}
		}

		function renderError () {
			if (typeof errorMessage === "string") {
				return (
					<ErrorModal message={errorMessage}/>
				)
			}
		}

		return (
			<div>
				<h1 className="text-center page-title">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;