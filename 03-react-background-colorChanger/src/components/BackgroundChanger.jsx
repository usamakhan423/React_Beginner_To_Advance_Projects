import React, { useState } from "react";

const BackgroundChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState("");

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };
  return (
    <div
      className={`flex flex-col items-center rounded-xl w-full h-96 justify-between p-4 ${backgroundColor}`}
    >
      <h1 className="text-3xl font-bold">Background Changer</h1>
      <div className="colors mt-8">
        <button
          onClick={() => changeBackgroundColor("bg-red-500")}
          className="bg-red-500 p-4 mx-2 border border-white"
        >
          Red
        </button>
        <button
          onClick={() => changeBackgroundColor("bg-orange-500")}
          className="bg-orange-500 p-4 mx-2 border border-white"
        >
          Orange
        </button>
        <button
          onClick={() => changeBackgroundColor("bg-blue-500")}
          className="bg-blue-500 p-4 border border-white"
        >
          Blue
        </button>
      </div>
    </div>
  );
};

export default BackgroundChanger;
