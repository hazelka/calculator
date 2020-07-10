import React from 'react';

const Display = ({ formula, displayVal }) => (
	<div className="display-container">
		<div className="display formula">
			{formula}
		</div>
		<div className="display value">
			{displayVal}
		</div>
	</div>
);

export default Display;