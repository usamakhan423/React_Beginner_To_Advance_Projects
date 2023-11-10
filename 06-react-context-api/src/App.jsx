import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="flex items-center justify-center w-full">
        <div className="bg-gray-600 p-4 rounded-lg w-1/2">
          <h1 className="text-3xl font-bold underline text-white">
            Context API
          </h1>
          <Login />
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
