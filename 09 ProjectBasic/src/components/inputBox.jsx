import React, { useState } from 'react';

const currencies = ['USD', 'PKR', 'AUD', 'EUR', 'INR', 'BTC', 'ETH'];

const CurrencyInput = () => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('PKR');
  const [amount, setAmount] = useState('');

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Currency Converter</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* From Section */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">From</label>
          <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3 shadow-sm">
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 bg-transparent focus:outline-none text-gray-800 font-semibold"
            />
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="bg-white border border-gray-300 text-sm rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {currencies.map((curr) => (
                <option key={curr} value={curr}>
                  {curr}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* To Section */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">To</label>
          <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3 shadow-sm">
            <input
              type="text"
              placeholder="Converted amount"
              value={amount ? (parseFloat(amount) * 280).toFixed(2) : ''}
              readOnly
              className="flex-1 bg-transparent text-gray-800 font-semibold focus:outline-none"
            />
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="bg-white border border-gray-300 text-sm rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {currencies.map((curr) => (
                <option key={curr} value={curr}>
                  {curr}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <div className="text-center mt-6">
        <button
          onClick={() => {
            const temp = fromCurrency;
            setFromCurrency(toCurrency);
            setToCurrency(temp);
          }}
          className="inline-block bg-indigo-600 text-white font-semibold px-5 py-2 rounded-full shadow hover:bg-indigo-700 transition duration-300"
        >
          Swap
        </button>
      </div>
    </div>
  );
};

export default CurrencyInput;
