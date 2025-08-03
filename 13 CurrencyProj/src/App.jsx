import { useState } from 'react'
import { InputBox } from "./components/index.js"
function App() {

  const [amount, setAmount] = useState();
  let [from, setFrom] = useState("usd");
  
  let [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);


  const CurrencyInfo = useCurrInfo(from)
  //now all rates of (from) is what we are having
  const options = Object.keys(CurrencyInfo)

  function swap() {
    setFrom(to)
    setTo(from)
  }

  const convertAmount = () => {
    const newAmount = amount * CurrencyInfo[to]
    setConvertedAmount(newAmount)
  }



  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover 
    bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.alphacoders.com/136/1367408.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertAmount();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                //below is on change so if onchnage we have to update our values 
                 onCurrencyChange={(newcurr) => setFrom(newcurr)}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute 
                z-10 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}

              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                selectCurrency={to}
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={() => setTo(to)}
                amountDisable
              />
            </div>
            <button type="submit" onClick={convertAmount} className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} To {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div >
  );
}

export default App

