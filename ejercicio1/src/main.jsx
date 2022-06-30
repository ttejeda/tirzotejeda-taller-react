import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header'
import Content from './components/content'
import Total from './components/total'

const App = () => {
  const course = 'Half Stack application development'

  const courseInfo = [
    { key: 'fundamentals', part: 'Fundamentals of React', exercises: 10 },
    { key: 'props', part: 'Using props to pass data', exercises: 7 },
    { key: 'state', part: 'State of a component', exercises: 14 },
  ]

  return (
    <div>
      <Header course={course} />
      <Content courseInfo={courseInfo}/>
      <Total courseInfo={courseInfo}/>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
