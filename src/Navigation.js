import React from 'react';

const Navigation = ({ toggle }) => (
	<ul id="nav-bar">
		<li className="nav" onClick={() => toggle(true)}>
			<i className="fa fa-calculator"></i> Calculator
		</li>
		<li className="nav" onClick={() => toggle(false)}>
			<i className="fa fa-exchange"></i> Currency
		</li>
	</ul>
);

export default Navigation;