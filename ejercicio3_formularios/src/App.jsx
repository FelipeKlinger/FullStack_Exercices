import { useState } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';

const App = (props) => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [numberPhone, setNumberPhone] = useState('')
  const [filterName, setFilterName] = useState('')

  // Controlador de evento para agregar
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: numberPhone,
      id: persons.length + 1
    }

    if (persons.some(personExist => personExist.name === personObject.name)) { // Retorna un true si encuentra dicho elemento que coincida
      alert(` ${personObject.name} "Ya existe" `)
    }
    else {
      setPersons(persons.concat(personObject));
      setNewName('');
      setNumberPhone('')
    }

  }

  const handleFilter = (event) => {

    console.log(event.target.value)
    setFilterName(event.target.value)
  }

  const handleNoteChange = (event) => { // controlador de eventos para el input
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberPhone = (event) => {

    console.log(event.target.value)
    setNumberPhone(event.target.value)
  }

  const personShow = persons
  const personsToshow = filterName.trim() === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase().trim()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} filterName={filterName} /> <br />
      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} numberPhone={numberPhone} newName={newName} handleNoteChange={handleNoteChange} handleNumberPhone={handleNumberPhone} />
      <h2>Numbers</h2>
      <Persons personsToshow={personsToshow} />
    </div>
  )
}

export default App