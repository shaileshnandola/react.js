import { Component } from "react";

class Count extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        console.log("Component did mount");
    }
    componentWillUnmount() {
        console.log("Component will unmount");
    }
    componentDidUpdate() {
        console.log("Component did update");
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }
    resate(){
        this.setState({
            count:0
            })
    }
    render() {
        return (
            <div>
                <h1>counter app</h1>
                <h2>count: {this.state.count}</h2>
                <button onClick={() => this.increment()}>+</button>
                <button disabled={this.state.count === 0} onClick={() => this.decrement()}>-</button>
                <button onClick={() => this.resate()}>Reset</button>
            </div>
        )
    }
}
export default Count;