import React, { useState, useEffect } from 'react'
import NotesList from './components/NotesList'
import { nanoid } from 'nanoid'
import Search from './components/Search';
import Header from './components/Head';
import './index.css'

function App() {
  const [notes, setNotes] = useState([]);
  const [searchNote, setSearchNote] = useState('');
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

  const addNote = (text) => {

    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deletingNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes)
  }
  return (

    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />

        <Search handleSearch={setSearchNote} />

        <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchNote))} handleAddNote={addNote} handleDelete={deletingNote} />

      </div>
    </div>
  )
}

export default App
