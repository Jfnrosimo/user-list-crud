//import hook
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

//import redux
import { addUser, deleteUser, updateUsername } from "./features/Users";

const App = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.users.value);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [searchItem, setSearchItem] = useState("");

  return (
    <div>
      <div className="addUser text-center m-4">
        <h1 className="text-5xl font-semibold mb-4">User Lists</h1>
        <input
          className="border border-slate-800 p-1 mx-2"
          type="text"
          name="name"
          value={name}
          placeholder="Name..."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border border-slate-800 p-1 mx-2"
          type="text"
          name="username"
          value={username}
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={(e) => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name: name,
                username: username,
              })
            );
            setName("");
            setUsername("");
          }}
          className="mx-3 border-2 border-orange-500 p-2 hover:bg-orange-500 rounded-md"
        >
          Add User
        </button>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Search a user</h2>
          <input
            className="border border-slate-800 p-1 mx-2"
            type="text"
            name="searchUser"
            id=""
            placeholder="Search user..."
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
      </div>

      <div className="displayUsers flex flex-wrap justify-center">
        {userList
          .filter((user) => {
            if (searchItem === "") {
              return user;
            } else if (
              user.name.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1
            ) {
              return user;
            }
          })
          .map((user) => {
            return (
              <div className="border border-slate-700 m-2 p-3 shadow-md w-1/6 ">
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <h2 className="text-2xl font-bold">{user.username}</h2>
                <div className="mt-2 p-1">
                  <input
                    className="border border-slate-800 text-sm"
                    type="text"
                    name="newUsername"
                    id=""
                    placeholder="New Username..."
                    onChange={(e) => {
                      setNewUsername(e.target.value);
                    }}
                  />
                  <button
                    className="text-sm mx-1 border bg-blue-200 rounded-sm m-1 p-1"
                    onClick={() => {
                      dispatch(
                        updateUsername({ id: user.id, username: newUsername })
                      );
                    }}
                  >
                    Update Username
                  </button>
                  <button
                    className="text-sm mx-1 border bg-red-200 rounded-sm m-1 p-1"
                    onClick={() => dispatch(deleteUser({ id: user.id }))}
                  >
                    Delete User
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
