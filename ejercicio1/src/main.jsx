import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    'Fundamentals of React',
    'Using props to pass data',
    'State of a component'
  ]
  const exercises = [
    10,
    7,
    14
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises}/>
      <Total exercises={exercises}/>
    </div>
  )
}

const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = ({parts}, {exercises}) => {
  return (
    <ul>
      {parts.map((part, index) => (
        <li>{part}</li>
      ))}
    </ul>
  )
}

const Total = ({exercises}) => {
  let temp = 0;
  exercises.map(exercise => (
    temp += exercise
  ))
  return (
    <div>
      <p>Number of exercises {temp}</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
