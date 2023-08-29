import { useContext } from "react";
import Note from "./Note";
import { NotesContext } from "../contexts/NotesContext";

export default function NotesList() {
  const { notes } = useContext(NotesContext);

  return (
    <div className="notesContainer">
      <p>You have {notes.length} notes</p>
      {notes.map((note) => (
        <Note
          className="notes"
          key={note.id}
          title={note.title}
          message={note.message}
          id={note.id}
        />
      ))}
    </div>
  );
}
