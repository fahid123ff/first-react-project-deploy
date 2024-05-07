import { useState } from "react";

const Team = () => {
  const [team, setTeam] = useState(11);

  const handleAdd = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };

  const handleRemove = () => {
    const newTeam = team - 1;
    setTeam(newTeam);
  };
  const teamsStyle = {
    border: "2px solid green",
    margin: "15px",
    padding: "15px",
    borderRadius: "13px",
  };

  return (
    <div style={teamsStyle}>
      <h3>player:{team}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}> Remove</button>
    </div>
  );
};

export default Team;
