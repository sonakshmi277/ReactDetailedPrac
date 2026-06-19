const ft = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Mango" },
  { id: 3, name: "Banana" }
];

function A() {
  return (
    <ul>
      {ft.map((fruit) => (
        <li key={fruit.id}>
          {fruit.name}
        </li>
      ))}
    </ul>
  );
}