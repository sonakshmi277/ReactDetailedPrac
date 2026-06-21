import { createContext, useState } from "react";
import ContextAPI from "./contextAPI";
//step 1 : create context
const UserContext = createContext();
//step 2 : wrap all the child (jaderke tui chaas je ora jate access koruk context api) inside a provider
//step 3: pass value
// step 4: consumer consume kar lega value 
function App() {
  const [val, func] = useState("hello");
  return (
    <>
      <UserContext.Provider value={val}>
        <ContextAPI />
      </UserContext.Provider>
    </>
  );
}

export default App;
export { UserContext };

/* another type
PARENT
function App(){
  function greet(){ 
      alert("Hello") 
    } 
    return <C1 fun={greet}/> 
  } 
  
  Child: 
  function C1(props){ 
    return ( <button onClick={props.fun}> Click Me </button> ) 
  }
  */