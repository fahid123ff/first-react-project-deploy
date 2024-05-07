import { useState } from "react";
import "./Friends.css";
import Friend from "./Friend";
const Friends = () => {
  const [friends, setFriends] = useState([]);
  useState(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div className="box">
      <h3>Friend : {friends.length}</h3>
      {friends.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
};

export default Friends;
