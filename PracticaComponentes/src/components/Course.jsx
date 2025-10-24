
import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({courses}) => {
 
  return (
    <div>
      <h1>Web development curriculum</h1>
    {courses.map(course =>
      <p key={course.id}> <Header course={course.name} />  <Content parts={course.parts} /> <Total parts={course.parts} />  </p>
    ) }
    
    </div>
  )

}

export default Course