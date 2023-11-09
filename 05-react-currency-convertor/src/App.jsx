import "./App.css";
import network1 from "./assets/network1.jpg";
import InputBox from "./components/InputBox";

function App() {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen w-full"
        style={{ backgroundImage: `url(${network1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <h1 className="text-3xl font-bold underline text-white text-center relative z-10">
          Currency convertor
        </h1>
        <InputBox />
      </div>
    </>
  );
}

export default App;
