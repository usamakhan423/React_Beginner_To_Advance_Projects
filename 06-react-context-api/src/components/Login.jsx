import React from "react";
import { useContext } from "react";
import { useState } from "react";
import UserContext from "../Context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-between w-full">
      <h1 className="text-white text-2xl my-4">Login</h1>
      <input
        type="text"
        value={username}
        placeholder="Username"
        className="py-2 px-4 my-4 w-1/2 rounded-md"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        className="py-2 px-4 my-4 w-1/2 rounded-md"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="py-2 font-semibold mb-4 px-8 bg-yellow-500 rounded"
        onClick={handleSubmit}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
