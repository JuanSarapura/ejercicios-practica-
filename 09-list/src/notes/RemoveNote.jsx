import { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";

function RemoveNote({ id }) {
  const { removeNote } = useContext(NotesContext);
  return (
    <button id="deleteButton" onClick={(e) => removeNote(id)}>
      Delete note
    </button>
  );
}

export default RemoveNote;
