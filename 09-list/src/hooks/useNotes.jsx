import { useState } from "react";

const LOCALSTORAGE_KEY = "MIAPP.list";

export default function useNotes() {
  const [notes, setNotes] = useState([]);

  function add(title, message) {
    const id = Date.now();
    const noteObject = { title, message, id };

    setNotes([noteObject, ...notes]);
  }
  return {
    notes,
    add,
  };
}
