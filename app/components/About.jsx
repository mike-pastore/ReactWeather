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
		<h3>About Component</h3>
	);
}

module.exports = About;