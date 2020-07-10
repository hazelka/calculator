import React from 'react';
import Display from './Display';
import Buttons from './Buttons';

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formula: "0",
      displayVal: "0",
      currentVal: null,
      calculated: false,
		};
	}

	handleNumber = number => {
    if (this.state.calculated) {
      let num = number === "." ? "0." : number.toString();
      this.setState({
        formula: /=/.test(this.state.formula)
          ? num
          : this.state.formula + num,
        displayVal: num,
        calculated: false
      })
    } else {
      this.state.displayVal === "0" && number !== "."
      ? this.setState({
          formula: this.state.formula === "0" 
            ? number.toString()
            : this.state.formula.replace(/0$/, number),
          displayVal: number.toString()
        })
      : this.setState({
          formula: this.state.formula + number,
          displayVal: this.state.displayVal + number
        });
    }
  }

  handleOperation = operator => {
    if (!this.state.calculated) {
    	let result = this.state.formula.replace(/x/g, "*");
  		result = Math.round(1000000000000 * eval(result)) / 1000000000000;
      this.setState({
        formula: this.state.formula + " " + operator + " ",
        displayVal: result.toString(),
        calculated: true,
      });
    } else if (this.state.currentVal !== null) {
      this.setState({
        formula: this.state.currentVal + " " + operator + " ",
        displayVal: this.state.currentVal,
        calculated: true
      });
    } else {
      this.setState({
        formula: this.state.formula.replace(/.(?=\s$)/, operator)
      });
    }
  }

  handleReset = () => {
    this.setState({
      formula: "0",
      displayVal: "0",
      currentVal: null,
      calculated: false
    });
  }

  handleEqual = () => {
    let result = eval(this.state.formula.replace(/x/g, "*"));
  	result = Math.round(1000000000000 * result) / 1000000000000;
    this.setState({
      formula: this.state.formula + " = " + result,
      displayVal: result.toString(),
      currentVal: result,
      calculated: true
    });
  }

  render() {
  	return (
  		<div className="calculator" style={{display: this.props.showing ? 'block' : 'none'}}>
        <Display 
          formula={this.state.formula}
          displayVal={this.state.displayVal} />
        <Buttons 
          handleNumber={this.handleNumber}
          handleOperation={this.handleOperation}
          handleReset={this.handleReset}
          handleEqual={this.handleEqual} />
      </div>
  	);
  }
}

export default Calculator;