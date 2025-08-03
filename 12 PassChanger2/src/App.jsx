import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  let [pass, setPass] = useState("")
  const [num, setNum] = useState(false)
  const [len, setLength] = useState(8)
  const [chars, setChars] = useState(false)
  const [Copy, setCopy] = useState("Copy")




  const genPass = () => {
    pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) {
      str += "1234567890"
    }
    if (chars) {
      str += "!@#$%^&*()"
    }


    for (let i = 0; i < len; i++) {
      pass += str[Math.floor(Math.random() * str.length)]
    }
    setPass(pass);
    setCopy("Copy");

  }
  useEffect(() => {
    genPass();


  }, [len, chars, num])
  return (
    <>



      <div className='bg-gray-900 rounded-3xl py-3 px-3 text-3xl mb-4 '>Pass Generator</div>
      <div className='bg-gray-700 py-7 px-10 text-3xl flex items-center gap-4'>
        <input
          type="text"
          value={pass}
          readOnly
          className='py-4 px-5 text-gray-800 bg-white rounded-lg flex-grow overflow-x-auto text-xl'
          placeholder='Generated Password'
        />
        <button
          onClick={() => {
            navigator.clipboard.writeText(pass);
            setCopy("Copied!");
          }}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out"
        >
          {Copy}
        </button>
      </div>

      <div className='bg-gray-700  gap-4 py-7 px-7 text-3xl '>


        <input type="range" name="len" value={len} min={8} max={50} onChange={(e) => {
          setLength(e.target.value)
        }} />
        <label for="len">Length:{len} </label>

      </div>
      <div className='bg-gray-700  gap-4 py-7 px-7 text-3xl '>


        <input type="checkbox" name="num" onChange={() => {
          setNum(prev => !prev)
        }} />
        <label for="num">Numbers </label>

        <br />

        <input type="checkbox" name="char" onChange={() => {
          setChars(prev => !prev)
        }} />
        <label for="char">Characters </label>

      </div>

    </>
  )
}

export default App
