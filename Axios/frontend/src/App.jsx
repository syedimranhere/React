import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  // jokes are array 
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    // if get req is sent the server will send a data in response which we will store in Jokes
    axios.get('/api/jokes')
      .then((res) => {
        // store jokes is imp part
        setJokes(res.data);
      })
      .catch((err) => {
        console.log("FAILED")
      })
  }, [])

  return (

    <div >
      <h2> 5 Jokes here</h2>
      <div id='dec'>
        {

          jokes.map((joke, idx) => (

            <h3>{joke.id}{" "}{joke.joke}</h3>
          ))

        }
      </div>

    </div>

  )
}

export default App
