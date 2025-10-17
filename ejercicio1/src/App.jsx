import { Component } from "react"

const Header = (props) => {

  return (

    <div>
    <p>
      {props.course}
    </p>
    </div>

  )
}

const Content = (props) => { // props es un objeto que contiene las propiedades pasadas al componente


  return (
    <div>
      <Part name={props.part1.name} exercises={props.part1.exercises} /> 
      <Part name={props.part2.name} exercises={props.part2.exercises} />
      <Part name={props.part3.name} exercises={props.part3.exercises} /> 
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises} 
    </p>
  )
}

////////////// Interfaz principal //////////////

const App = () => {

  const course = {
    name: 'Half Stack application development',

    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
  
    <div>
      <Header course={course.name} />
      <Content part1={course.parts[0]} part2={course.parts[1]} part3={course.parts[2]} />  
    </div>

  )
}

export default App