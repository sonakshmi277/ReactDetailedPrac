import React from 'react'

function List_Keys() {
  const ft = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Mango" },
    { id: 3, name: "Banana" }
  ];
  return (
    <li style={{color:"white"}}>
      {
        ft.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))
      }
    </li>
  );
}

export default List_Keys