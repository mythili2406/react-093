import React from 'react'
import "./Styles.css"

function FunctionalComponent  (props) {
    console.log(props)//obj
    let applyStyle = props.apply ? 'heading' : ''
    let inlineStyle = {
        color: 'red',
        backgroundColor: 'yellow'
    }
  return (
    <div>FunctionalComponent
         <h1 class={`${applyStyle} font-style`}>welcome to react class tutorials  {props.clgname},{props.city}</h1> 
         {props.children}
    <h2 style={inlineStyle}>gandimaisamma\\bahadurpalle\\secundrabad</h2>
    {/* <h2>high demand  for business people in IT </h2> */}
    </div>
  )
}

export default FunctionalComponent