import React,{useState,useEffect,useReducer} from 'react';
import "./hooks.css";
function App(){
  const countReducer=(state,action)=>{
    switch(action.type){
      case "INCREMENT":
        return {count:state.count+1};
      case "DECREMENT":
        return {count:state.count-1};
      case "RESET":
        return {count:0};
      default:
        return state;
    }
  }
  const [count,setCount]=useState(0);
  const [state,dispatch]=useReducer(countReducer,{count:0});
  useEffect(()=>{
    document.title=`useState count : ${count} | useReducer count : ${state.count}`
  },[count,state.count])
  return(
    <div>
      <center>
        <h1>REACT HOOKS EXAMPLES</h1>
        <h2>useState Example</h2>
        <h3>Count : {count}</h3>
        <button onClick={()=>setCount(count+1)}>INCREMENT</button>
        <button onClick={()=>setCount(count-1)}>DECREMENT</button>
        <button onClick={()=>setCount(0)}>RESET</button>
        <h2>useReducer Example</h2>
        <h3>Count : {state.count}</h3>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>INCREMENT</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>DECREMENT</button>
        <button onClick={()=>dispatch({type:"RESET"})}>RESET</button>
        <h2>useEffect Example</h2>
        <h3>useState count : {count} | useReducer count : {state.count}</h3>
      </center>
    </div>
  );
}
export default App;