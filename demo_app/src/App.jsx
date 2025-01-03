// //import necessary modules
// import React, { useState, useCallback } from 'react';  // Allows the component to have state variable 

// function Child({ onClick }) {
//   console.log('Child rendered');
//   return <button onClick={onClick}>Click Me</button>;
// }


// // defining app component
// export default function App() {
//   const [count, setCount] = useState(0);             //state variable for the counter    Start at 0  
//   const [text, setText] = useState('');




//   // Helper function
//   const handleClick = useCallback(() => {
//     setCount((prev) => prev + 1);                          //increments the counder by 1
//   }, []);


  
//   // Rendered JSX:
//   return (
//     <div>
//       <h1>useCallback Example</h1>
//       <p>Count: {count}</p>
//       <Child onClick={handleClick} />
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type something..."
//       />
//     </div>
//   );
// }






import { useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [count, setCount] = useState(0);              //  Tracks a numeric value (initially 0). 
  const [todos, setTodos] = useState([]);              // (initially an empty array).      //  Functions to update the respective state variables.
 
  // Expensive Calculation
  const calculation = expensiveCalculation(count);


  // State Update Functions:
  const increment = () => {           //: Updates count by incrementing its value by 1.
    setCount((c) => c + 10000);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };


//  UI Structure
  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};


// Expensive Calculation Function
const expensiveCalculation = (num) => {
  console.log("Calculating...");                     //   each time it's invoked.
  for (let i = 0; i < 1000000000; i++) {              
    num += 1;
  }
  return num;
};


export default App

