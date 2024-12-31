import React from "react";

// class App extends React.Component{
//   render(){
//     return(
//       <h1>welcome to class component</h1>
//     )
//   }
// }
// export default App

class App extends React.Component{
  constructor(props){
    super()
    this.state={
      color:'red',
      size:'400px',
      name:props.name,
    }
  }
  render(){
    return(
      <div>
        <h1>welcome to class component</h1>
        <p>{this.state.color}</p>
        <p>{this.state.size}</p>
        <p>{this.state.name}</p>
      </div>
    )

  }
}
export default App