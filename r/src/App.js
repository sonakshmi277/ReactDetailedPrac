import { createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./about";
import Navbar from "./Navbar";

//import ContextAPI from "./contextAPI";
//step 1 : create context
//const UserContext = createContext();
//step 2 : wrap all the child (jaderke tui chaas je ora jate access koruk context api) inside a provider
//step 3: pass value
// step 4: consumer consume kar lega value 


const router= createBrowserRouter([
  {
    path: "/",
    element:
      <div>
        <Navbar />
      </div>
  },
  {path: "/about",
    element:
      <div>
        <About />
        <Navbar />
      </div>
  }

]);
function App() {
  //const [val, func] = useState("hello");
  return (

    <div>
      <RouterProvider router={router} />
    </div>
    /*
    <>
      <UserContext.Provider value={val}>
        <ContextAPI />
      </UserContext.Provider>
    </>
      */
  );
}

export default App;
//export { UserContext };

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