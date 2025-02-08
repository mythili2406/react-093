import React, { Component } from 'react'
import './ClassComponent.css'
export default class ClassComponent extends Component {
    constructor(){
       
        super();
        this.state={msg:"Hi This is My react project,click below"
            ,flag:true
        }
        
    }
    changeMsg=()=>{
        this.setState({msg:"Welcome to my page",flag:false})
    }
  render() {
    let applyStyle=this.state.flag?'msg1':"msg2";
    return (
      <div>
      <h1 className={applyStyle}>{this.state.msg}</h1>
      <button onClick={this.changeMsg} >Click to get greetings</button></div>
    )
  }
}