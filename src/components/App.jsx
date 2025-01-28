import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesArr, setNotesArr] = useState([]);

  function addNote(noteToAdd){
    setNotesArr((prev)=>{
      return [...prev, noteToAdd]
    });
  }
  function delNote(e){
    setNotesArr((prev)=>{      
      delete prev[e.key];
      return (prev);
    })
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notesArr.map((note, index)=> (
         <Note key={index} id={index} title={note.title} content={note.content} delNote={delNote} />
         
      ))}      
      <Footer />
    </div>
  );
}

export default App;
