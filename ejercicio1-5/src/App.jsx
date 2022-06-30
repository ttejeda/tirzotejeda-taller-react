import { useState } from 'react'

  
const App = () => {
  const [counter, setCounter] = useState(0)
  const incrementByOne = () => setCounter(counter + 1)
  const decrementByOne = () => setCounter(counter - 1)
  const resetToZero = () => setCounter(10)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState('')

  setTimeout(
    () => {
      setData('Llegaron los datos!')
      setIsLoading(false)
    },
    10000
  )

  let toRender
  if(isLoading){
    toRender = (<h1>Loading data...</h1>)
  } else {
    toRender = (<p>{data}</p>)
  }

  return (
    <div>
      {toRender}
      <div>{counter}</div>
      <button onClick={incrementByOne} disabled={counter >= 10}>
        Increment
      </button>
      <button onClick={decrementByOne} disabled={counter <= 0}>
        Decrement
      </button>
      <button onClick={resetToZero}>
        Reset
      </button>
    </div>
  )
}

export default App
