import { useState } from 'react'

function App() {
  const [good, setGood] = useState(0)
  const incrementGood = () => setGood(good + 1)
  const [neutral, setNeutral] = useState(0)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const [bad, setBad] = useState(0)
  const incrementBad = () => setBad(bad + 1)
}

export default App
