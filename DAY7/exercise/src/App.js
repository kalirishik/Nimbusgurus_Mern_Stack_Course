import "./App.css";
import React, { useState } from "react";
// import { useState,useEffect} from 'react';
// import './App.css';
// // function App() {
// //   const [count,setCount]=useState(0);
// //   function addCount(){
// //     setCount(count+1);
// //   }
// //   function decCount(){
// //     setCount(count-1);
// //   }
// //   const [cars,setCars]=useState('TESLA');
// //   return (
// //     <div>
// //       <h1>WELCOME TO COUNT USING REACT HOOK</h1>
// //       <button onClick={addCount}>ADD</button><b>{count}</b><button onClick={decCount}>Decrement</button>
// //       <h2>WELCOME TO {cars} CARS</h2>
// //       <button onClick={()=>setCars('AUDI')}>CLICK TO AUDI</button>
// //       <button onClick={()=>setCars('BMW')}>CLICK TO BMW</button>
// //       <button onClick={()=>setCars('PORSCHE')}>CLICK TO PORSCHE</button>
// //     </div>
// //   );
// // }
// function App(){
//   const[count,setCount]=useState(0);
//   useEffect(()=>{
//       setTimeout(()=>{
//           setCount(count+1)
//         },1000)
//       })
//   // const ProductContext=createContext();
//   // const [product,setProduct]=useContext()
//   return(
//     <div>
//         <h1 style={{textAlign:'center'}}>Timer has executed {count} Times</h1>
//     </div>
//   );
// }

// export default App;
//--------------------------------------------------------------------------------------------
// import { useState} from 'react';
// function App(){
//   const [header,setHeader]=useState("WELCOME TO MERN STACK COURSE");
//   function changeHeader(e){
//       e.preventDefault();
//       let p=prompt("Enter the Header:");
//       if(p)
//         setHeader(p);
//   }
//   const btnStyle1={
//     backgroundColor:'aqua',
//     color:'black',
//     borderRadius:5,
//     fontSize:15,
//     margin:5,
//   }
//   const btnStyle2={
//     backgroundColor:'black',
//     color:'white',
//     borderRadius:5,
//     fontSize:15,
//   }
//   return(
//     <div style={{margin:300}}>
//       <center>
//         <h1>{header}</h1>
//         <button style={btnStyle1} onClick={()=>setHeader("WELCOME TO REACTJS")}>CLICK TO REACTJS</button>
//         <button style={btnStyle1} onClick={()=>setHeader("WELCOME TO NODEJS")}>CLICK TO NODEJS</button>
//         <button style={btnStyle1}onClick={()=>setHeader("WELCOME TO EXPRESSJS")}>CLICK TO EXPRESSJS</button><br/><br/>
//         <button  style={btnStyle2} onClick={(e)=>changeHeader(e)}>CLICK TO CHANGE THE HEADER</button>
//       </center>
//     </div>
//   );
// }
//--------------------------------------------------------------------------------
// import { createContext,useState,} from "react";
// import LoginPage from "./LoginPage";
// import UseProfile from "./UseProfile";
// export const ApplicationContent=createContext(null);
// import AppUseRef from "./AppUseRef";
// function App(){
// const[username,setUsername]=useState("user1");
// return(
// <ApplicationContent.Provider value={{username,setUsername}}>
//   <LoginPage/>
//   <UseProfile/>
// </ApplicationContent.Provider>
//     <div>
//       <AppUseRef/>
//     </div>
//   );
// }
//  export default App;
//-------------------------------------------------------------------------------------------------------------------
import AppUseRef from "./AppUseRef";
import { useReducer } from "react";
export const content=React.createContext();
const reducer = (state, actionValue) => {
  switch (actionValue.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
    case "Reset":
      return { count: 0 };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 5, showValue: true });
  const [Say,setSay]=useState("Hello");
  return (
    <div>
      <content.Provider value={[Say,setSay]}>
      <center>
        <h1>UseReducer Sample</h1>
        <br />
        <p> COUNT : {state.count}</p> <br />
        <button
          onClick={() => {
            dispatch({ type: "Increment" });
          }}
        >
          CLICK TO Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "Decrement" });
          }}
        >
          CLICK TO Decrement
        </button>
        <button
          onClick={() => {
            dispatch({ type: "Reset" });
          }}
        >
          CLICK TO Reset
        </button>
        <br />
        {state.showValue && <p>IAM BEING DISPLAYED</p>}
      </center>
      <AppUseRef/>
      </content.Provider>
    </div>
  );
}
export default App;
