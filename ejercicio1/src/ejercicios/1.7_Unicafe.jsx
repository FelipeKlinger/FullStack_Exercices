import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

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


  const Average = () => 
    {
      const average = (good - bad) / all

      return <p>Average {average}</p>
    }

    const Positive = () => 
    {
      const averagePositive = (good / all) * 100
      return <p> positive {averagePositive} %</p>

    }
  

  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={handleGoodClick} text="Good"></Button>
      <Button handleClick={handleNeutraClick} text="neutral"></Button>
      <Button handleClick={handleBadClick} text="bad"></Button>
      <Header text='Statics' />
      <Nombre nombre='Good' estado={good} />
      <Nombre nombre='Neutral' estado={neutral} />
      <Nombre nombre='Bad' estado={bad} />
      <Nombre nombre='all' estado={all} />
      <Average /> 
      <Positive />

      

    </div>


  )
}

export default App