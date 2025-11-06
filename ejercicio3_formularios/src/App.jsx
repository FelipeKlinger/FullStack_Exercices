import { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import Notification from './components/Notification';
import personService from './services/persons';

const App = (props) => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [numberPhone, setNumberPhone] = useState('');
  const [filterName, setFilterName] = useState('');
  const [message, setMessege] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialpersons) => {
      setPersons(initialpersons)
    })
  }, [])

  const buttonDelete = (id) => {
    const persoDelete = persons.find((n) => n.id === id);

    if (window.confirm(`Do you really want to delete ${persoDelete.name}?`)) {
      personService.deleteOne(id).then(() => { setPersons(persons.filter(person => person.id !== id)); })
    }
  };

  // Controlador de evento para agregar
  const addPerson = (event) => {

    event.preventDefault();

    const personObject = {
      name: newName,
      number: numberPhone
    }

    if (persons.some(personExist => personExist.name.trim().toLowerCase() === personObject.name.trim().toLowerCase())) { //some() busca en el array la primera coincidencia

      if (window.confirm(`${personObject.name} ya existe, ¿desea cambiar el número?`)) {

        const person = persons.find(p => p.name.trim().toLowerCase() === personObject.name.trim().toLowerCase()); // filtra y retorna al elemnto que se le cambia el numero

        const updatedPerson = { ...person, number: personObject.number }; // ...spread es un operador que crea un objeto con los valores pero sobreescribe el que se le indique

        personService
          .update(person.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(
              persons.map(p => p.id !== person.id ? p : returnedPerson) // p mira todo los objetos de persons y si el id no es de la persona 
              // que se quiere cambiar person.id (Linea 47) mete al array nuevo el objecto p, si los ids son iguales mete la respuesta de Axios que es el objecto
            );
            setNewName('')
            setNumberPhone('')
          })
          .catch(error => {
            alert('Error actualizando el contacto');
          });
      }
    }
    else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          setMessege(`Added ${returnedPerson.name}`);
          setTimeout(() => {
            setMessege(null);
          }, 4000);

          setNewName('');
          setNumberPhone('')
        })
        .catch(error => {
          alert('Error al agregar el contacto');
        });
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
      <Notification messege={message} />
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