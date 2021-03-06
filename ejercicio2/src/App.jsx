import { useState } from 'react'

function App() {
  const [good, setGood] = useState(0)
  const incrementGood = () => setGood(good + 1)
  const [neutral, setNeutral] = useState(0)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const [bad, setBad] = useState(0)
  const incrementBad = () => setBad(bad + 1)
  let all = good + neutral + bad
  let average = (good - bad) / all | 0
  let positive = (good/all) * 100 | 0

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={incrementGood}>good</button>
      <button onClick={incrementNeutral}>neutral</button>
      <button onClick={incrementBad}>bad</button>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  )
}

export default App
