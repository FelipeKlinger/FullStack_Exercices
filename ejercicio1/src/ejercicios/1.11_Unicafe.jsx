import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => (<button onClick={handleClick}> {text} </button>
)

const Statics = ({ good, neutral, bad, all }) => {

  //recordar que las funciones retornan lo que sea, tambien elementos de interfaz dentro de un <div> independientemente del return de App
  if (all === 0) {
    return <p> No feedback given</p>
  }
  else {
    const average = (good - bad) / all;
    const positive = (good / all) * 100;
    return (
      <div>
        <StaticsLine text="good" value={good} />
        <StaticsLine text="neutral" value={neutral} />
        <StaticsLine text="bad" value={bad} />
        <StaticsLine text="Average" value={average} />
        <StaticsLine text="Positive" value={positive + " %"} />
      </div>
    )
  }
}

const StaticsLine = ({ text, value }) => {

  return (

    <div>
      <table>
        <tbody> {text} {value}</tbody>
      </table>

    </div>
  )

}



const Nombre = ({ nombre, estado }) => <p>{nombre} {estado}</p>

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutraClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <Header text='give feedback' />

     <header> 
      <table>
        <tbody>
          <td>  <Button handleClick={handleGoodClick} text="Good"></Button> </td>
          <td>  <Button handleClick={handleNeutraClick} text="neutral"></Button> </td>
          <td>  <Button handleClick={handleBadClick} text="bad"></Button></td>
        </tbody>
      </table>
      </header>
      
      <Header text='Statics' />
      <Statics good={good} neutral={neutral} bad={bad} all={all} />
    </div>

  )
}

export default App