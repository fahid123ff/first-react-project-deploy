import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useState(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2>User Length: {users.length}</h2>
    </div>
  );
};

export default Users;
