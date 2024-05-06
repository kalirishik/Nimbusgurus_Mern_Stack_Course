import { useContext } from "react";
import { ApplicationContent } from "./App";
const UseProfile = () => {
  const {username}=useContext(ApplicationContent);
  return (
    <div>
      <h1>WELCOME {username}</h1>
    </div>
  )
}

export default UseProfile;