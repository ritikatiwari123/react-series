import { useState } from "react"

function App() {
  let [counter, setCounter] = useState(5)

  const addValue = () =>
  {
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
  }

  const removeValue = () =>
  {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br></br>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
