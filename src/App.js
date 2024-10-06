import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";
import { fetchUsers } from "./store/userReduser";
import { ItemUsers } from "./ItemUsers";

function App() {
  const { users, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const Handler = () => {
    dispatch(fetchUsers());
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log("из Ап", users);
  console.log(users.length);
  return (
    <div className="App">
      <h1>Пользователи</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка {error}</p>}
      {users.length ? (
        <ul>
          {users.map((user) => (
            <ItemUsers id={user.id} name={user.name} />
          ))}
        </ul>
      ) : null}
      <p>{users.name}</p>
      {users.email}
      <button
        onClick={Handler}
        style={{ display: users.length ? "none" : "block " }}
      >
        {" "}
        Венрнуть список
      </button>
    </div>
  );
}

export default App;
