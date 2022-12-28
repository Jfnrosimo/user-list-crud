//import hook
import { useSelector } from "react-redux";

const App = () => {
  const userList = useSelector((state) => state.users.value);
  return (
    <div>
      <div className="addUser text-center m-4">
        <h1 className="text-5xl font-semibold mb-4">User Lists</h1>
        <input
          className="border border-slate-800 p-1 mx-2"
          type="text"
          name="name"
          id=""
          placeholder="Name..."
        />
        <input
          className="border border-slate-800 p-1 mx-2"
          type="text"
          name="username"
          id=""
          placeholder="Username..."
        />
        <button className="mx-3 border-2 border-orange-500 p-2 hover:bg-orange-500 rounded-md">
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return <h1>{user.name}</h1>;
        })}
      </div>
    </div>
  );
};

export default App;
