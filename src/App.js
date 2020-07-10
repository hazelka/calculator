import React from 'react';
import Navigation from './Navigation';
import Calculator from './Calculator';
import Converter from './Converter';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingCal: true
    };
  }

  showCalculator = bool => {
    this.setState({
      showingCal: bool
    });
  };

  render() {
    return(
      <div className="app-container">
        <Navigation toggle={this.showCalculator}/>
        <Calculator showing={this.state.showingCal}/>
        <Converter showing={!this.state.showingCal}/>
        <p className="footer">Hand Coded By<br />Hazel Feng</p>
      </div>
    );
  }
}

export default App;
