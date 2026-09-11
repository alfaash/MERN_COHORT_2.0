// Function vs Class based component

import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {
  return(
    <div className="flex justify-center items-center">
    <Compo/>
    <MyComp/>
    </div>
  )
}

function Compo(){
  const [count, setCount] = useState(0)

  return (
    <div className="border ">
      <button onClick={()=>setCount(count+1)}>Count:{count}</button>
    </div>
  )
}

class MyComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count:0};
  }

  incCount = ()=>{
    this.setState({count: this.state.count + 1});
  }
  render() {
    return(
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incCount}>INC</button>
      </div>
    )
  }
}

export default App
