import { useEffect, useState } from "react";

const LOCALSTORAGE_KEY = "MIAPP.list";

export default function useNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const notesSaved = localStorage.getItem(LOCALSTORAGE_KEY);
    if (notesSaved) {
      setNotes(JSON.parse(notesSaved));
    }
  }, []);

  useEffect(() => {
    if (!notes || notes.length == 0) return;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  function add(title, message) {
    const id = Date.now();
    const noteObject = { title, message, id };

    setNotes([noteObject, ...notes]);
  }

  function removeNote(id) {
    const newList = notes.filter((note) => note.id !== id);
    setNotes(newList);
  }

  return {
    notes,
    add,
    removeNote,
  };
}
