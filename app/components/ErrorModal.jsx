var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = new React.createClass({
	getDefaultProps: function () {
		return {
			title: 'Error',
		};
	},
	propTypes: {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},
	componentDidMount: function () {
		// pull off props to work with
		var {title, message} = this.props;

		// handle all content here, so that React keeps track of DOM changes from Foundation's modal component
		var modalMarkup = (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>{message}</p>
				<p>
					<button className="button hollow" data-close="">
						Okay
					</button>
				</p>
			</div>
		);

		// mount modalMarkup DOM into a string, to pass into Foundation's modal (so React is keeping track of all of this)
		var $modal = $(ReactDOMServer.renderToString(modalMarkup));
		// find DOM node where this ErrorModal.jsx modal lives, inject string version of modalMarkup
		$(ReactDOM.findDOMNode(this)).html($modal);

		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function () {	
		return (
			<div>
			</div>
		);
	}
});

module.exports = ErrorModal;