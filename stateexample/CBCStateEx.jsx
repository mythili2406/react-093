import React, { Component } from 'react';

class CBCStateEx extends Component {
    constructor() {
        super();
        this.state = {
            num:100,
            hobbies: ["playing", "reading", "running"] // Fixed the array syntax
        };
    }
changeNum=()=>{
    this.setState({
        num:200
    })
}
    render() {
        console.log(this.state);
        return (
            <div>
                {this.state.hobbies.map((hobby, i) => ( // Fixed the return statement
                    <li key={i}>{hobby}</li> // Fixed the variable reference
                ))}
                <h1>{this.state.num}</h1>
                <button onClick={this.changeNum}>Change Number</button>
            </div>
        );
    }
}
export default CBCStateEx;