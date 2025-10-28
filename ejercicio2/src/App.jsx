import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      id: 1
    }

  ])
  const [newName, setNewName] = useState('')


  // Controlador de evento para agregar
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id: persons.length + 1
    }

    if (persons.some(personExist => personExist.name === personObject.name)) { // Retorna un true si encuentra dicho elemento que coincida
      alert(` ${personObject.name} "Ya existe" `)
    }
    else {
      setPersons(persons.concat(personObject));
      setNewName('');

    }

  }

  const handleNoteChange = (event) => { // controlador de eventos para el input
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const personShow = persons

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson} >
        <div>
          <input value={newName} onChange={handleNoteChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {personShow.map(person => <li key={person.id}>
          {person.name}
        </li>)}

      </ul>
    </div>
  )
}

export default App