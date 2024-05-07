const Friend = (friend) => {
  console.log(friend);
  const { body, id } = friend;
  return (
    <div className="box">
      <h3>Name :{id}</h3>
      <p>Email:{body}</p>
    </div>
  );
};

export default Friend;
