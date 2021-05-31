import React from 'react'

const Hello = (param) => {
  return (
    <div>
      <p>Hello {param.name}, you are {param.age} years old.</p>
    </div>
  )
}

const App = () => {
  const name = 'Anoop'
  const age = 20
  return (
    <>
      <h1>Greetings</h1>
      <Hello name = {name} age = {age}/>
    </>
  )
}

export default App
