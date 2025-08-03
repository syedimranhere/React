// src/App.jsx
import Card from "../components/card.jsx";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0)
  function Addval() {
    setCounter((prev) => prev + 1)
    setCounter((prev) => prev + 1)
    setCounter((prev) => prev + 1)
    setCounter((prev) => prev + 1)
    setCounter((prev) => prev + 1)
    setCounter((prev) => prev + 1)
    setCounter((prev) => prev + 1)
    setCounter((prev) => prev + 1)
    setCounter((prev) => prev + 1)
    setCounter((prev) => prev + 1)
  }
  return (
    <>
      <h1 className="bg-yellow-500 text-blue-900 m-10 rounded-xl p-10 ">IMRAN {counter}</h1>
      <Card username="Imran" />
      <Card />
      <button onClick={Addval}>Button</button>


    </>
  );
}

export default App;
