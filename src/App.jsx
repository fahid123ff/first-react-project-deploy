import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";

import Team from "./Team";
import Users from "./User";

function App() {
  function hadleClick() {
    alert("button click");
  }

  const handle2Click = () => {
    alert("button 2 click");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <Users></Users>
      <Friends></Friends>
      <h3>React Core Concept</h3>
      <Team></Team>
      <Counter></Counter>
      <button onClick={hadleClick}>Click Me</button>
      <button onClick={handle2Click}>Button 2</button>
      <button onClick={() => alert("click 3")}>Third</button>
      <button onClick={() => addToFive(5)}>Add Five</button>
    </>
  );
}

export default App;
