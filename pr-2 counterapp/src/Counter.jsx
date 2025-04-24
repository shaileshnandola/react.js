import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  reset = () => {
    this.setState({
      count: 0
    });
  };

  componentDidMount(){
    console.log('Component mounted');
  }

  componentDidUpdate(){
    console.log('Component updated');
  }
  componentWillUnmount(){
    console.log('component is end');
    
  }

  render() {
    return (
      <div align="center" className="container">
        <h1 className="header">Counter App</h1>
        <h1>Count: {this.state.count}</h1>
        <div className="button-container">
          <button className="inc" onClick={this.increment}>
            Increment
          </button>
          <button className="dec" onClick={this.decrement} disabled={this.state.count === 0}>
            Decrement
          </button>
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
