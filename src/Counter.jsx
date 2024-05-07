import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  //   console.log(count, setCount);

  const handleAdd = () => {
    const newCont = count + 1;
    setCount(newCont);
  };

  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div
      style={{
        border: "2px solid tomato",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>Counters : {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>minase</button>
    </div>
  );
}
