import { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import personService from './services/persons';

const App = (props) => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('')
  const [numberPhone, setNumberPhone] = useState('')
  const [filterName, setFilterName] = useState('')



  useEffect(() => {
    personService.getAll().then((initialpersons) => {
      setPersons(initialpersons)
    })
  }, [])

  const buttonDelete = (id) => {
    const persoDelete = persons.find((n) => n.id === id);
    personService.deleteOne(id).then(() => {
      if (window.confirm(` Do you really delete ${persoDelete.name} `)) {
        setPersons(persons.filter(person => person.id !== id))
      }
    })
  }
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

  const personsToshow = filterName.trim() === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase().trim()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} filterName={filterName} /> <br />
      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} numberPhone={numberPhone} newName={newName} handleNoteChange={handleNoteChange} handleNumberPhone={handleNumberPhone} />
      <h2>Numbers</h2>
      <ul>
        {personsToshow.map((person) => (
          <Persons key={person.id}
            person={person}
            deleteOne={() => buttonDelete(person.id)}
          />
        ))}
      </ul>
    </div>
  )
}

export default App