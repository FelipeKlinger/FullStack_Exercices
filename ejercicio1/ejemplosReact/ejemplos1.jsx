import { useState } from 'react'

const Display = ({ counter }) => <div> {counter} </div>


const Button = ({ handleClick, text }) => (

  <button onClick={handleClick}>
    {text}
  </button>
)

//functional component App

const History = ({ allClicks, ...rest }) => { // componente de historia de clicks

  if (allClicks.length === 0) {
    return (

      <div>
        the app is used by pressing the buttons

      </div>

    )
  }

  return (
    <div>
      button press history: {allClicks.join(' ')}

    </div>
  )
}

const Prueba = ({ name, edad, ...props }) => <div>  ejecucion y prueba de las variables para {name} y tiene {edad} y se dedica a {props.professio}  </div>

const App = () => {

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    allClicks.push('L')
    setAll(allClicks)
    setLeft(left + 1)

  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (

    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />

      <Prueba name="Felipe" edad={55} professio="developer"
      />
    </div>

  )
}
export default App