import React from "react";

const InputBox = ({
  label = "From",
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) => {
  return (
    <div className=" space-x-4  w-full  flex items-center justify-between bg-gray-500 rounded p-4">
      <div className="">
        <p className="text-lg font-semibold text-white relative z-10 mb-2">
          {label}
        </p>
        <input
          className="outline-none w-full bg-transparent py-1.5 text-lg font-semibold"
          type="number"
          value={amount}
          disabled={amountDisable}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div>
        <p className="text-lg font-semibold relative text-white z-10 mb-2">
          Select Currency
        </p>
        <select
          className="block w-32 px-2 py-1 text-black border border-gray-300 rounded-md focus:ring focus:ring-blue-200 z-10"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          <option value="default" disabled>
            Select an option
          </option>
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
