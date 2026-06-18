import UseStateprac2 from "./useStateprac2"
function App() {
  return (
   <UseStateprac2/>
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