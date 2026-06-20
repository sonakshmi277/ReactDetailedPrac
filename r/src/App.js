import List_Keys from "./lists_Keys"
function App() {
  return (
   <List_Keys/>
  );
}

export default App;

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