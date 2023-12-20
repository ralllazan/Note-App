import React from 'react'
import Note from './Notes'
import AddNote from './AddNote'
import '../index.css';

const NotesList=({notes,handleAddNote,handleDelete}) =>{
    return (
        <div className="notes-list">
           {notes.map((note)=>
               <Note id={note.id} text={note.text} date={note.date}
               handleDelete={handleDelete}
               />
           )}
           <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}

export default NotesList
