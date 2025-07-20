import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "20px",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Current Count: {count}
      </p>
      <button
        style={{ margin: "5px", padding: "10px" }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={{ margin: "5px", padding: "10px" }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button
        style={{ margin: "5px", padding: "10px" }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
