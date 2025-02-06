import React from 'react'

const FBCStateEx = () => {
    // const data= React.useState("hi");
    // console.log(data);
    const [value,setValue]=React.useState(0);
    console.log(value);
    const changeValue = () => {
    setValue(1000);
    }
  return (
    <div>FBCStateEx
      <button onClick={changeValue}>Changevalue</button>
    </div>
  )
}

export default FBCStateEx