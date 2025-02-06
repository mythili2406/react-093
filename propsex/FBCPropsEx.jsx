import React from 'react'

export const FBCPropsEx = (props) => {
    console.log(props);
    if(props.isMarried===true){

    
  return (
    <div>
        <h1>{props.username} is a married person    </h1>
        
        {
          props.hobbies.map(hobby => {
            return <li>{hobby}</li>
          })
        }
    </div>
            );      
     } else{
return <h1>not married</h1>
              }      
  
}
export default FBCPropsEx
