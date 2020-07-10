import React from 'react';

const Buttons = ({ handleNumber, handleOperation, handleReset, handleEqual }) => (
	<div className="buttons-container">
		<button className="large-button button reset" onClick={() => handleReset()}>
			AC
		</button>
		<button className="button operator" onClick={() => handleOperation("/")}>
			/
		</button>
		<button className="button operator" onClick={() => handleOperation("x")}>
			X
		</button>
		<button className="button number" onClick={() => handleNumber(7)}>
			7
		</button>
		<button className="button number" onClick={() => handleNumber(8)}>
			8
		</button>
		<button className="button number" onClick={() => handleNumber(9)}>
			9
		</button>
		<button className="button operator" onClick={() => handleOperation("-")}>
			-
		</button>
		<button className="button number" onClick={() => handleNumber(4)}>
			4
		</button>
		<button className="button number" onClick={() => handleNumber(5)}>
			5
		</button>
		<button className="button number" onClick={() => handleNumber(6)}>
			6
		</button>
		<button className="button operator" onClick={() => handleOperation("+")}>
			+
		</button>
		<button className="button number" onClick={() => handleNumber(1)}>
			1
		</button>
		<button className="button number" onClick={() => handleNumber(2)}>
			2
		</button>
		<button className="button number" onClick={() => handleNumber(3)}>
			3
		</button>
		<button className="equal" onClick={() => handleEqual()}>
			=
		</button>
		<button className="large-button button number" onClick={() => handleNumber(0)}>
			0
		</button>
		<button className="button number" onClick={() => handleNumber(".")}>
			.
		</button>
	</div>
);

export default Buttons;