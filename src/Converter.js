import React from 'react';
import { currencies } from './currencies';

class Converter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			from: "USD",
			fromSymbol: "$",
			fromAmount: "1",
			to: "USD",
			toSymbol: "$",
			toAmount: "1",
			rate: 1
		};
	}

	renderCurrencies = () => {
		let id = 0;
		let options = [];
		for (let c in currencies) {
			options.push(
				<option value={c} key={id++}>{c + " "  + currencies[c]["name"]}</option>
			);
		}
		return options;
	};

	handleFromChange = amount => {
		if (!amount || !/[^\d\.]/.test(amount))  {
			this.setState({
				fromAmount: amount ? amount : "0",
				toAmount: (amount * this.state.rate).toFixed(4)
			});
		}
	};

	handleToChange = amount => {
		if (!amount || !/[^\d\.]/.test(amount)) {
			this.setState({
				fromAmount: (amount / this.state.rate).toFixed(4),
				toAmount: amount ? amount : "0"
			});
		}
	};

	getExchangeRate = (currency, from) => {
		const newFrom = from ? currency : this.state.from;
		const newTo = from ? this.state.to : currency;
		const url = `https://api.exchangeratesapi.io/latest?base=${newFrom}`;
		fetch(url)
			.then(response => response.json())
			.then(data => {
				this.setState({
					rate: data.rates[newTo],
					from: newFrom,
					fromSymbol: currencies[newFrom]["symbol"],
					fromAmount: from 
						? this.state.fromAmount 
						: (this.state.toAmount / data.rates[newTo]).toFixed(4),
					to: newTo,
					toSymbol: currencies[newTo]["symbol"],
					toAmount: from 
						? (this.state.fromAmount * data.rates[newTo]).toFixed(4)
						: this.state.toAmount
				});
			}	
		);
	};
	
	render() {
		return (
			<div className="converter-container" style={{display: this.props.showing ? "flex" : "none"}}>
				<input
					className="currency value" 
					value={this.state.fromSymbol + " " + this.state.fromAmount} 
					onChange={e => this.handleFromChange(e.target.value.replace(/.\s/, ""))}/>
				<select
					className="currency"  
					onChange={e => this.getExchangeRate(e.target.value, true)}>
					{this.renderCurrencies()}
				</select>
				<div className="sign">
					<i className="fa fa-long-arrow-up"></i>
					<i className="fa fa-long-arrow-down"></i>
				</div>
				<input 
					className="currency value" 
					value={this.state.toSymbol + " " + this.state.toAmount} 
					onChange={e => this.handleToChange(e.target.value.replace(/.\s/, ""))}/>
				<select
					className="currency"  
					onChange={e => this.getExchangeRate(e.target.value, false)}>
					{this.renderCurrencies()}
				</select>
				<p>Exchang Rate is {this.state.rate.toFixed(5)}</p>
			</div>
		);
	}
}

export default Converter;