import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Haz clicleado el boton {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Click!</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
