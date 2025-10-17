const Header = (props) => {

  return (

    <div>
    <p>
      {props.course}
    </p>
    </div>

  )
}

const Content = (props) => {
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'

  return (
    <div>
  
      <Part name={part1} />
      <Part name={part2}  />
      <Part name={part3}  />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} 
    </p>
  )
}

const Total = (props) => {

  return (

    <div>
    <p>
      {props.total}
    </p>

    </div>

  )

}

const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Total total={exercises1} /> 
      <Total total={exercises2} /> 
      <Total total={exercises3} /> 
    </div>
  )
}

export default App