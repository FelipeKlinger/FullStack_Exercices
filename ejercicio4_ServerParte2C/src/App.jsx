import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const toggleImportanceOf = id => {  // controlador de eventos para cambiar la importancia
  const url = `http://localhost:3001/notes/${id}` // URL del recurso específico
  const note = notes.find(n => n.id === id) // encontrar la nota correspondiente
  const changedNote = { ...note, important: !note.important } // crear una nueva nota con la importancia cambiada

  axios.put(url, changedNote).then(response => { //axios.put para actualizar la nota en el servidor 
    setNotes(notes.map(note => note.id !== id ? note : response.data)) // actualizar el estado local con la respuesta del servidor
  })
}

  useEffect(() => {
    axios.get('http://localhost:3001/notes').then((response) => {
      setNotes(response.data)
    })
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    }

    axios.post('http://localhost:3001/notes', noteObject).then((response) => {
      console.log(response)
      setNotes(notes.concat(response.data))
      setNewNote('')
    })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter((note) => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note, i) => (
          <Note key={note.i} note={note} toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App