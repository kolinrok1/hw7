import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./store/userReduser";
import { fetchUser } from "./GetItemBtID";
import { Item } from "./Item";

export const ItemUsers = ({ id, name }) => {
  const dispatch = useDispatch();

  const handlerClickGetUser = () => {
    dispatch(fetchUsers(id));

    console.log("item bil");
  };

  return <button onClick={handlerClickGetUser}>{name}</button>;
};
