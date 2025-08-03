import { useState } from 'react';
import './App.css';

function App() {
  //initial val is 1
  const [counter, setCounter] = useState(1);

  const addVal = () => {
    // here prev is the param, so we are using arrow func
    if (counter != 20) {
      setCounter(prev => prev + 1);

    }
  };

  const decVal = () => {
    if (counter != 0) {
      // here prev is the param, so we are using arrow func
      setCounter(prev => prev - 1);

    }

  };

  const resetVal = () => {
    setCounter(0);
  };
  //once returned this 
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex flex-col items-center justify-center p-6">
      <div className="bg-white text-gray-900 shadow-2xl rounded-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6">⚡️ React Counter Dashboard</h1>
        <h2 className="text-5xl font-extrabold text-blue-600 mb-6">{counter}</h2>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={addVal}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300"
          >
            ➕ Add
          </button>
          <button
            onClick={decVal}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300"
          >
            ➖ Subtract
          </button>
        </div>

        <button
          onClick={resetVal}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300"
        >
          🔄 Reset
        </button>
      </div>

      <footer className="mt-10 text-gray-400 text-sm">
        IMRAN 💎
      </footer>
    </div>
  );
}

export default App;
