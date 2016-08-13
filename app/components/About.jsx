var React = require('react');

// var About = React.createClass({
// 	render: function () {
// 		return (
// 			<h3>About Component</h3>
// 		);
// 	}
// });

// stateless functional component (set-up)
// also using ES6 arrow functions to initiate anonymous function
var About = () => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<p>Thanks for checking out this page! I'm learning React to create more component-based web apps for easier scalability, maintenance, and overall organization.</p>
			<p>Some areas of interest:</p>
			<ul>
				<li>
					<a href="https://www.udemy.com/the-complete-react-web-app-developer-course" target="_blank">The Complete Reach Web App Developer Course</a> - Online class where I learned to make this
				</li>
				<li>
					<a href="http://openweathermap.org/api" target="_blank">OpenWeatherMap.org's API</a> - All weather data comes from there
				</li>
				<li>
					<a href="https://github.com/mike-pastore/ReactWeather" target="_blank">Github repo</a> for this app
				</li>
			</ul>
		</div>
	);
}

module.exports = About;