import Note from "./Note";
import useNotes from "../hooks/useNotes";

export default function NotesList() {
  const { notes } = useNotes();

  return (
    <div className="notesContainer">
      <p>You have {notes.length} notes</p>
      {notes.map((note) => (
        <Note
          className="notes"
          key={note.id}
          title={note.title}
          message={note.message}
        />
      ))}
    </div>
  );
}
