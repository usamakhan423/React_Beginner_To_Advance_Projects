import { useState } from "react";
import "./App.css";
import network1 from "./assets/network1.jpg";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        className="absolute bg-cover bg-center h-screen w-full"
        style={{ backgroundImage: `url(${network1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="bg-gray-50 rounded-lg w-1/2 flex flex-col items-center justify-center p-4 mx-auto mt-32">
          <h1 className="text-3xl font- relative z-10 mb-4">
            Currency convertor
          </h1>
          {/* <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setAmount(amount)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
            amountDisable
          />
          <button
            onClick={swap}
            className="py-2 px-8 text-xl font-semibold bg-orange-700 my-2 rounded-lg text-white hover:bg-orange-900 cursor-pointer z-10"
          >
            SWAP
          </button>
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setAmount(currency)}
            selectCurrency={to}
          />
          <button
            onClick={convert}
            className="py-2 px-20 w-full mt-8 text-xl font-semibold bg-blue-900 my-2 rounded-lg text-white hover:bg-blue-950 cursor-pointer z-10"
          >
            {`Convert ${from.toUpperCase()} to ${to.toUpperCase()}`}
          </button> */}

          <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  convert();
                }}
              >
                <div className="w-full mb-1">
                  <InputBox
                    label="From"
                    amount={amount}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setAmount(amount)}
                    selectCurrency={from}
                    onAmountChange={(amount) => setAmount(amount)}
                  />
                </div>
                <div className="relative w-full h-0.5">
                  <button
                    type="button"
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                    onClick={swap}
                  >
                    swap
                  </button>
                </div>
                <div className="w-full mt-1 mb-4">
                  <InputBox
                    label="To"
                    amount={convertedAmount}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setTo(currency)}
                    selectCurrency={to}
                    amountDisable
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                >
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
