import React from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) => {
  return (
    <div className="flex items-center space-x-4 bg-gray-50  ">
      <div className="text-center">
        <p className="text-lg font-semibold text-white relative z-10">
          {label}
        </p>
        <input
          className="text-2xl font-bold relative z-10 bg-white border-none"
          type="text"
          value={amount}
          readOnly
          onChange={(e) => onAmountChange(e.target.value)}
        />
      </div>
      <div>
        <p className="text-lg font-semibold relative text-white z-10">
          Select Currency
        </p>
        <select
          className="block w-32 px-2 py-1 text-gray-800 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {/* <option value="default" disabled>
            Select an option
          </option> */}
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency.value}>
              {currency.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
