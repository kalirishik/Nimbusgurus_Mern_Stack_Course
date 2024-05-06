import { useContext, useRef } from "react";
import { content } from "./App";
const AppUseRef = () => {
    const refValue=useRef(null);
    const [Say,setSay]=useContext(content);
    function change(){
        refValue.current.value=123;
        console.log(refValue.current.value);
        alert("button clicked");   
    }
  return (
    <div>
        <input type="text"  ref={refValue}/>
        <p onMouseEnter={()=>setSay('hii')} onMouseLeave={()=>setSay('hello')}>{Say}</p>
        <button onClick={change}>CLICK TO CHANGE THE VALUE</button>
    </div>
  )
}

export default AppUseRef