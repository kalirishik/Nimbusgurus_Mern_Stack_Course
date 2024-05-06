import { useContext } from "react"
import { ApplicationContent } from "./App"

const LoginPage = () => {
    const {setUsername}=useContext(ApplicationContent);
  return (
    <div>
        <input type="text"  onChange={(event)=>{
            setUsername(event.target.value)
            console.log(event.target.value)
        }}/>
        {/* <input type="password"/>
        <button type="submit" value="submit"></button> */}
    </div>
  )
}

export default LoginPage