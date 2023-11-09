import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  // States variables
  const [length, setLength] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [inputPassword, setInputPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  // Funciton to generate password and handle some events
  const passwordGenerator = useCallback(() => {
    let password = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) string += "0123456789";
    if (characterAllowed) string += "!@#$%^&*{}[]~`_-";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      password += string.charAt(char);
    }

    setInputPassword(password);
  }, [length, numberAllowed, characterAllowed, setInputPassword]);

  // Copy input password
  const copyPasswordToClipboard = useCallback(() => {
    // Select the  whole characters
    passwordRef.current?.select();
    // Select a specific characters
    // passwordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(inputPassword);
  }, [inputPassword]);

  // useEffect to call the passwordGenerator function
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <>
      <div className="rounded-lg py-4 bg-gray-800 flex flex-col items-center justify-center">
        <div className="w-2/3">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Password Generator
          </h1>
          <div>
            <input
              type="text"
              value={inputPassword}
              ref={passwordRef}
              placeholder="Password"
              className="px-4 py-2 text-xl font-semibold rounded-l-lg w-1/2 outline-none"
              readOnly
            />
            <button
              onClick={copyPasswordToClipboard}
              className="bg-blue-500 py-2 text-xl rounded-r-lg px-4 font-semibold"
            >
              Copy
            </button>
          </div>
          <div className="mt-8 flex items-center gap-4 justify-center text-orange-500 text-xl font-semibold ">
            <div>
              <input
                type="range"
                value={length}
                min={6}
                max={100}
                className=" w-40 accent-green-500 bg-gray-400 outline-none " // Apply your custom class
                onChange={(e) => setLength(e.target.value)}
              />
              Length
              <span className="text-xl">{length}</span>
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <input
                type="checkbox"
                className="h-5 w-5 rounded-md outline-none"
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <span>Number</span>
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <input
                type="checkbox"
                className="h-5 w-5 rounded-md outline-none"
                defaultChecked={characterAllowed}
                onChange={() => {
                  setCharacterAllowed((prev) => !prev);
                }}
              />
              <span>Character</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
