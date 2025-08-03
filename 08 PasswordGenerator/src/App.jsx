import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(7)
  const [copy, setcopy] = useState("Copy")
  const [numYes, setNumYes] = useState(false)
  const [charYes, setCharYes] = useState(false)
  const [pass, setPass] = useState("")
  // first one is function second one are those states
  const passGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numYes) {
      str += "0123456789"
    }
    if (charYes) {
      str += "~!@#$%^&*()_+-{}][';'/"
    }
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str[index]

    }
    // finally set new pass takeh har jagaha hojaay
    setPass(pass)
    setcopy("Copy")

  })

  const passRef = useRef()

  // it will run when any three of below is chnged
  useEffect(() => {
    passGen()
  }, [length, numYes, charYes])

  //use ref hook here
  return (
    <>
      <h1 className='text-yellow-500 bg-gray-900 px-40'>Password Generator</h1>
      <div className='  bg-gray-900 flex  h-full py-10 px-5'>

        <input type="text" value={pass} className='py-6 px-5 text-shadow-indigo-400 w-full' placeholder='Password ' />
        <button
          className="text-white px-4 py-2 rounded bg-transparent active:bg-white active:text-blue-400 hover:bg-red-700 transition duration-150"
          onClick={() => {
            // jo text pass me ha, 
            navigator.clipboard.writeText(pass);
            setcopy("Copied!");
          }}
        >
          {copy}
        </button>
      </div>


      <div className='w-full  bg-gray-600 flex justify-center h-full py-4 gap-2'>
        <label htmlFor="Length" className="text-white">Length:{length} </label>
        {/* on change we are setting value which is updating both in useState and the text above */}
        <input type="range" min={7} max={60} value={length} onChange={(e) => setLength(e.target.value)} />

      </div>



      <div className='w-full  bg-gray-600 flex justify-center h-full gap-2 py-1'>
        <label htmlFor="Numbers" className="text-white">Numbers  </label>
        <input type="checkbox" onChange={() => {
          setNumYes(prev => !prev)


        }} name="Numbers " />
      </div>
      <div className='w-full  bg-gray-600 flex justify-center h-full gap-2 py-2 '>
        <label htmlFor="Chars" className="text-white">Chars  </label>
        <input type="checkbox" onChange={() => {
          setCharYes(prev => !prev)
        }} name="Chars " />
      </div>
    </>
  )
}


export default App
