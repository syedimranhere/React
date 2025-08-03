import React, { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId();

    return (
        <div className={`bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-md flex flex-col sm:flex-row gap-4 ${className}`}>
            {/* Amount Input */}
            <div className="w-full sm:w-1/2">
                <label htmlFor={amountInputId} className="text-gray-700 text-sm font-semibold mb-1 block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="number"
                    placeholder="Enter amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

            {/* Currency Dropdown */}
            <div className="w-full sm:w-1/2 text-right">
                <label className="text-gray-700 text-sm font-semibold mb-1 block">Currency</label>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >

                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox;
