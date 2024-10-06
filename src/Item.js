import { useSelector } from "react-redux";

export const Item = () => {
  const { users } = useSelector((state) => state.users);
  console.log("из айтем", users);
  return (
    <>
      {users.map((user) => (
        <id>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </id>
      ))}
    </>
  );
};
