var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
	onSearch: function (e) {
		e.preventDefault();
		
		// pull props from search bar in nav
		var location = this.refs.navSearch.value;
		var encodedLocation = encodeURIComponent(location);

		if (location.length > 0) {
			this.refs.navSearch.value = '';
			// inject location into URL (used ES6 literal here instead of concatenating string + variable)
			window.location.hash = `#/?location=${encodedLocation}`;
		}
	},
	render: function () {
		return (
			<div className='top-bar'>
				<div className='top-bar-left'>
					<ul className='menu'>
						<li className='menu-text'>Weather App</li>
						<li>
							<IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
						</li>
						<li>
							<Link to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
						</li>
						<li>
							<Link to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link>
						</li>
					</ul>
				</div>
				<div className='top-bar-right'>
					<form onSubmit={this.onSearch}>
						<ul className='menu'>
							<li>
								<input type="search" ref="navSearch" placeholder="Search weather by city"/>
							</li>
							<li>
								<input type="submit" className="button" value="Get Weather"/>
							</li>
						</ul>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = Nav;