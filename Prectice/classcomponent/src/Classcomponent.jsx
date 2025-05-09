import { Component } from "react";

class Classcomponent extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            recipes:[]
        }
       
    }

    componentDidMount() {
        fetch(`https://dummyjson.com/recipes`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            this.setState({recipes: data.recipes})
        })
    }
    componentDidUpdate() {
        console.log("component did update");
    }
    componentWillUnmount() {
        console.log("component will unmount");
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

    render() {
        return (
            <div>
                <h1>Mounting</h1>
                <h2>conut:{this.state.count}</h2>
                <button onClick={() => this.increment()}>+</button>
                <button onClick={() => this.decrement()} disabled={this.state.count === 0}>-</button>

                <table border={1}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    this.state.recipes.map((r,i)=>{
                        console.log(r)
                        return (
                            <tr key={i}>
                            <td>{r.id}</td>
                            <td>{r.name}</td>

                            </tr>
                        )
                    })
                }
                    </tbody>
                </table>

            </div>
        )
    }

}



export default Classcomponent;
