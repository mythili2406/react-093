// import React from "react";

// function App() {
//   // let ele  = React.createElement("div" , {className:"App"} , 
//   //   React.createElement("h1" ,null, "Header")
//   // )
//   let username = "Maheshwari";
//   return (
//     // <div className="App">
//     //  <h1>Header</h1>
//     //  <input />
//     // </div>
//     // ele
//   //  <section>
//   //    <h1>One JSx element</h1>
//   //   <p>lorm3
//   //   </p>
//   //  </section>
// <div>
// <h1>{username}</h1>
//   <p>{100+100}</p>
// </div>
//   );
// }
// export default App;

// ! components

// !CBC
// import React from "react";
// class App extends React.Component{
//   render(){
//     return(
//       <h1>Class based component</h1>
//     )
//   }
// }
// export default App;

// ! FBC

// function App(){
//   return(
//     <h1>Function based component</h1>
//   )
// }
// export default App;

//! OR

// const App=()=>{
//   return(
//     <h1>Arrow function component</h1>
//   )
// }
// export default App;

// ! component composition
// import React from 'react'
// import Navbar from './components/Navbar'
// import Main from './components/Main'
// import Sidebar1 from './components/Sidebar1'
// import Sidebar2 from './components/Sidebar2'
// import Footer from './components/Footer'
// cimport './global.css'
// const App = () => {
//   return (
//     <div className='app'>
//       <Navbar/>
//       <Main/>
//       <div className='sidebar'>
//       <Sidebar1/>
//       <Sidebar2/>
//       </div>
//       <Footer/>
//     </div>
//   )
// }

// export default App

// !props
// import React, { Component } from 'react'
// // import CBCPropsEx from './propsex/CBCPropsEx'
// import FBCPropsEx from './propsex/FBCPropsEx'
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <CBCPropsEx username="mythili"
//         age={20}
//         hobbies={["playing","reading","running"]}
//         address={{city:"Hyd",state:"TS"}}
//         sendfunc={function(){alert("Hello")}}
//         /> */}
//         <FBCPropsEx username="mythili"
//         isMarried={false}
//         hobbies={["playing","reading","running"]} />
//         </div>
//     )
//   }
// }
// !props children
// import React from 'react'
// // import { PropChildEx } from './propsex/PropChildEx'
// // import {SubChild} from './propsex/SubChild'
// import Child1 from './propsex/Child1'
// export const App = () => {
//   return (
//     <div>
//       {/* <PropChildEx num={100}>
//         <h1>Children</h1>
//         <p>Paragraph</p> */}
//       {/* </PropChildEx> */}
      
//       {/* <SubChild>hi</SubChild> */}
   
        
//       <Child1/>
//     </div>
//   )
// }
// export default App
import React from 'react'
import FunctionalComponent from './components/FunctionalComponent'
// import CBCStateEx from './stateexample/CBCStateEx'
// import FBCStateEx from './stateexample/FBCStateEx'
import  myStyles from './components/myStyle.module.css'
const App = () => {
  return (
    <div className='App'>
      <h2 style={myStyles}>styling</h2>
    <FunctionalComponent clgname="mru" city="hyd" apply={true}> {/* //add false to not apply css to func componnet here for h1*/}
    {/* <CBCStateEx */}
    <h1>hello</h1>
    </FunctionalComponent>
    </div>
  )
}
export default App
